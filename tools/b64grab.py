#!/usr/bin/env python3
"""Decode a base64 image that overflowed a browser tool result into a file.

The browser tool writes oversized results to disk as [{type,text},...]; the
base64 payload can arrive split across entries and without its '=' padding.
"""
import json, base64, re, sys

src, dst = sys.argv[1], sys.argv[2]
txt = ''.join(x.get('text', '') for x in json.load(open(src, encoding='utf-8')))
runs = re.findall(r'[A-Za-z0-9+/=]{500,}', txt)
if not runs:
    sys.exit('no base64 blob found')
b64 = max(runs, key=len).rstrip('=')
b64 += '=' * (-len(b64) % 4)
data = base64.b64decode(b64)
if not data.startswith(b'\xff\xd8\xff'):
    sys.exit('decoded %d bytes but it is not a JPEG' % len(data))
open(dst, 'wb').write(data)
print('wrote %s (%d bytes)' % (dst, len(data)))
