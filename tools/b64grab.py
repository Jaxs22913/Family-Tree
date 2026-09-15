#!/usr/bin/env python3
"""Decode a base64 image that overflowed a browser tool result into a file.

The browser tool writes oversized results to disk as [{type,text},...]. Two
things can go wrong and both are silent, so both are checked here:
  * the payload can arrive without its '=' padding;
  * the payload can be TRUNCATED, which yields a JPEG that decodes and
    renders its first rows before dissolving into noise.

Emit the payload from the page as 'LEN=<n>|<base64>' and this verifies the
length; either way it refuses to write a JPEG that lacks its end-of-image
marker.
"""
import base64, json, re, sys

src, dst = sys.argv[1], sys.argv[2]
txt = ''.join(x.get('text', '') for x in json.load(open(src, encoding='utf-8')))

m = re.search(r'LEN=(\d+)\|', txt)
if m:
    declared = int(m.group(1))
    b64 = re.match(r'[A-Za-z0-9+/=]+', txt[m.end():]).group(0)
    if len(b64) != declared:
        sys.exit('TRUNCATED: got %d of %d characters — re-export smaller'
                 % (len(b64), declared))
else:
    runs = re.findall(r'[A-Za-z0-9+/=]{500,}', txt)
    if not runs:
        sys.exit('no base64 blob found')
    b64 = max(runs, key=len)

b64 = b64.rstrip('=')
b64 += '=' * (-len(b64) % 4)
data = base64.b64decode(b64)

if not data.startswith(b'\xff\xd8\xff'):
    sys.exit('decoded %d bytes but it is not a JPEG' % len(data))
if data[-2:] != b'\xff\xd9':
    sys.exit('JPEG is truncated (no end-of-image marker) — re-export smaller')

open(dst, 'wb').write(data)
print('wrote %s (%d bytes, complete)' % (dst, len(data)))
