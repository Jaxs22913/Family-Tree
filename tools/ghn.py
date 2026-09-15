#!/usr/bin/env python3
"""Search Georgia Historic Newspapers full text and print only the matching context."""
import json, re, sys, urllib.parse, urllib.request

BASE = "https://gahistoricnewspapers.galileo.usg.edu/search/pages/results/"

def search(phrase=None, andtext=None, y1=None, y2=None, rows=20, ctx=340):
    q = {'format':'json','rows':str(rows)}
    if phrase: q['phrasetext'] = phrase
    if andtext: q['andtext'] = andtext
    if y1: q.update({'date1':str(y1),'date2':str(y2 or y1),'dateFilterType':'yearRange'})
    url = BASE + '?' + urllib.parse.urlencode(q)
    try:
        raw = urllib.request.urlopen(url, timeout=90).read()
    except Exception as e:
        print('  ERROR', e); return []
    d = json.loads(raw)
    out = []
    key = (phrase or andtext or '').split()[-1]
    for r in d.get('items', []):
        yr = str(r.get('year') or '')
        if y1 and not (int(y1) <= int(yr or 0) <= int(y2 or y1)): continue
        t = r.get('ocr_eng') or ''
        m = re.search(r'.{0,%d}%s.{0,%d}' % (ctx, re.escape(key), ctx), t, re.S|re.I)
        snip = ' '.join((m.group(0) if m else t[:ctx]).split())
        out.append((r.get('title'), r.get('date'), r.get('id'), snip))
    print('  total hits: %s | shown in range: %d' % (d.get('totalItems'), len(out)))
    for ti, dt, i, sn in out:
        print('  -- %s %s' % (str(ti)[:34], dt))
        print('     %s' % sn[:620])
    return out

if __name__ == '__main__':
    import argparse
    p = argparse.ArgumentParser()
    p.add_argument('--phrase'); p.add_argument('--and', dest='andt')
    p.add_argument('--y1'); p.add_argument('--y2'); p.add_argument('--rows', default=20)
    a = p.parse_args()
    search(a.phrase, a.andt, a.y1, a.y2, a.rows)
