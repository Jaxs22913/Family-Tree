/* The Luke–McKinnon Line — shared behaviour:
   site nav, the person drawer, census tables, and the document lightbox. */

/* ---------------- navigation ---------------- */
(function nav(){
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = [
    ['index.html',   'The tree'],
    ['origins.html', 'Origins'],
    ['stories.html', 'Lives'],
    ['kin.html',     'Kin'],
    ['records.html', 'Documents'],
    ['next.html',    'What to ask for']
  ];
  const bar = document.createElement('div');
  bar.className = 'topbar';
  bar.innerHTML = '<div class="topbar-in">' +
    '<a class="brand" href="index.html">The Luke–McKinnon Line</a>' +
    links.map(([h,t]) =>
      `<a class="navlink" href="${h}"${h===here?' aria-current="page"':''}>${t}</a>`).join('') +
    '</div>';
  document.body.insertBefore(bar, document.body.firstChild);
})();

/* ---------------- census tables ---------------- */
function censusHTML(key){
  const c = (typeof CEN !== 'undefined') && CEN[key];
  if(!c) return '';
  return `<div class="cen">
    <div class="cen-h"><b>${c.y} · ${c.t}</b><span>${c.pl} · ${c.cite}</span></div>
    <div class="cen-scroll"><table><thead><tr>${c.cols.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
    <tbody>${c.rows.map(r=>`<tr class="${r[4]==='me'?'me':''}">
      <td>${r[0]||''}</td><td>${r[1]||''}</td><td class="num">${r[2]||''}</td><td>${r[3]||''}</td>
    </tr>`).join('')}</tbody></table></div>
    <div class="cen-f">${c.note} <a href="${c.url}" target="_blank" rel="noopener">See the original &rarr;</a></div>
  </div>`;
}

/* ---------------- source links ---------------- */
function srcHTML(list){
  return (list || []).map(function(s){
    var shown = s.u.replace(/^https?:\/\//, '');
    if(shown.length > 58) shown = shown.slice(0, 58) + '\u2026';
    return '<a class="src-link" href="' + s.u + '" target="_blank" rel="noopener">' +
           '<span class="k">' + s.k + '</span>' + shown + '</a>';
  }).join('');
}

/* ---------------- trade / occupation ---------------- */
function tradeHTML(p){
  if(p.occ){
    var g = (typeof GRADE !== 'undefined' && GRADE[p.occ[1]]) ? GRADE[p.occ[1]][1] : '';
    return '<div class="trade-box ' + p.occ[1] + '">' +
           '<div class="trade-label">' + p.occ[0] +
           (g ? '<span class="trade-g">' + g + '</span>' : '') + '</div>' +
           '<p>' + p.occ[2] + '</p></div>';
  }
  var first = p.n.replace(/<[^>]+>/g, '').replace(/[\u201c\u201d"]/g, '').split(' ')[0];
  var msg = p.liv
    ? 'Living \u2014 occupation withheld along with the rest of the record.'
    : 'No record has turned up yet that states an occupation for ' + first + '.';
  return '<p class="ev quiet">' + msg + '</p>';
}

/* ---------------- person cards + drawer ---------------- */
function personCard(id){
  const p = PEOPLE[id]; if(!p) return '';
  const [bc, bt] = GRADE[p.g];
  const dates = p.liv ? '<div class="p-dates living">living</div>'
              : (p.b || p.d) ? `<div class="p-dates">${p.b||'?'} — ${p.d||'?'}</div>` : '';
  const place = p.bur ? `<div class="p-place">${p.bur}</div>`
              : (p.bp ? `<div class="p-place">b. ${p.bp}</div>` : '');
  const nc = (p.cen||[]).length, ns = (p.src||[]).length;
  const trade = p.occ ? `<div class="p-trade ${p.occ[1]}">${p.occ[0]}</div>` : '';
  return `<button class="p ${p.g}" data-id="${id}">
    <div class="p-name">${p.n}</div>${dates}${place}${trade}
    <div class="p-foot"><span class="p-badge ${bc}">${bt}</span>
      ${nc?`<span class="docpill">${nc} census${nc>1?'es':''}</span>`:''}
      ${ns?`<span class="docpill">${ns} source${ns>1?'s':''}</span>`:''}
    </div></button>`;
}

function renderTree(el){
  el.innerHTML = GENS.map(g => `
    <section><div class="band-head"><span class="gen-no">GEN ${g.no}</span>
      <h2>${g.t}</h2><span class="era">${g.era}</span></div>
      <div class="couples">${g.rows.map(r => `
        <div class="couple">${r.lab?`<div class="couple-label">${r.lab}</div>`:''}
          <div class="pair">${personCard(r.a)}${r.b?`<div class="amp">&amp;</div>${personCard(r.b)}`:''}</div>
        </div>`).join('')}</div></section>`).join('');
}

/* ---------------- drawer ---------------- */
let lastFocus = null;
function buildDrawer(){
  if(document.getElementById('drawer')) return;
  const scrim = document.createElement('div');
  scrim.className = 'scrim'; scrim.id = 'scrim';
  const dr = document.createElement('aside');
  dr.className = 'drawer'; dr.id = 'drawer';
  dr.setAttribute('aria-hidden','true');
  dr.setAttribute('aria-label','Person detail');
  dr.innerHTML = '<div class="dr-in" id="drIn"></div>';
  document.body.appendChild(scrim); document.body.appendChild(dr);
  scrim.addEventListener('click', closePerson);
}
function openPerson(id){
  buildDrawer();
  const p = PEOPLE[id]; if(!p) return;
  const [bc, bt] = GRADE[p.g];
  let rows = '';
  if(p.b)   rows += `<dt>Born</dt><dd>${p.b}${p.bp?` · ${p.bp}`:''}</dd>`;
  if(p.d)   rows += `<dt>Died</dt><dd>${p.d}${p.dp?` · ${p.dp}`:''}</dd>`;
  if(p.liv) rows += `<dt>Status</dt><dd>Living — dates and places withheld</dd>`;
  if(p.bur) rows += `<dt>Buried</dt><dd>${p.bur}</dd>`;
  document.getElementById('drIn').innerHTML =
    `<button class="dr-close" id="drClose" aria-label="Close">&times;</button>
     <h3>${p.n}</h3>
     <div class="dr-sub">${p.liv ? 'living' : `${p.b||'?'} — ${p.d||'?'}`}</div>
     <span class="p-badge ${bc}">${bt}</span>
     ${rows ? `<dl class="dl">${rows}</dl>` : ''}
     <div class="dr-sec">Trade</div>${tradeHTML(p)}
     <div class="dr-sec">What the evidence says</div>
     <p class="ev">${p.ev}</p>
     ${(p.cen||[]).length ? `<div class="dr-sec">In the census</div>${p.cen.map(censusHTML).join('')}` : ''}
     ${(p.src||[]).length ? '<div class="dr-sec">Sources</div>' + srcHTML(p.src) : ''}`;
  const dr = document.getElementById('drawer'), scrim = document.getElementById('scrim');
  dr.classList.add('on'); scrim.classList.add('on'); dr.setAttribute('aria-hidden','false');
  dr.scrollTop = 0;
  const btn = document.getElementById('drClose');
  btn.addEventListener('click', closePerson); btn.focus();
}
function closePerson(){
  const dr = document.getElementById('drawer'), scrim = document.getElementById('scrim');
  if(!dr) return;
  dr.classList.remove('on'); scrim.classList.remove('on'); dr.setAttribute('aria-hidden','true');
  if(lastFocus) lastFocus.focus();
}

/* ---------------- document lightbox ---------------- */
function buildLightbox(){
  if(document.getElementById('lb')) return;
  const lb = document.createElement('div');
  lb.id = 'lb';
  lb.style.cssText = 'position:fixed;inset:0;z-index:80;display:none;'+
    'background:rgba(8,10,11,.93);overflow:auto;padding:20px;text-align:center';
  lb.innerHTML =
    '<button id="lbClose" aria-label="Close" style="position:fixed;top:14px;right:16px;'+
    'width:36px;height:36px;border-radius:2px;border:1px solid rgba(255,255,255,.35);'+
    'background:rgba(0,0,0,.5);color:#fff;font-size:20px;cursor:pointer;z-index:2">&times;</button>'+
    '<div id="lbHint" style="color:rgba(255,255,255,.7);font-size:12px;margin:2px 0 14px;'+
    'font-family:\'IBM Plex Mono\',monospace;letter-spacing:.04em"></div>'+
    '<img id="lbImg" alt="" style="max-width:none;border-radius:2px;'+
    'box-shadow:0 8px 40px rgba(0,0,0,.6);cursor:zoom-out">';
  document.body.appendChild(lb);
  lb.addEventListener('click', e => { if(e.target.id !== 'lbImg' || lb.dataset.zoom === '1') closeLb(); });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbImg').addEventListener('click', e => {
    e.stopPropagation();
    const img = e.target;
    if(lb.dataset.zoom === '1'){ img.style.width = ''; img.style.maxWidth = '96%'; lb.dataset.zoom = '0';
      document.getElementById('lbHint').textContent = 'Click the image to zoom in · Esc to close'; }
    else { img.style.maxWidth = 'none'; img.style.width = '2000px'; lb.dataset.zoom = '1';
      document.getElementById('lbHint').textContent = 'Zoomed — scroll to read · click again to fit'; }
  });
}
function openLb(src, caption){
  buildLightbox();
  const lb = document.getElementById('lb'), img = document.getElementById('lbImg');
  img.src = src; img.style.maxWidth = '96%'; img.style.width = ''; lb.dataset.zoom = '0';
  document.getElementById('lbHint').textContent =
    (caption ? caption + '  ·  ' : '') + 'Click the image to zoom in · Esc to close';
  lb.style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeLb(){
  const lb = document.getElementById('lb');
  if(lb){ lb.style.display = 'none'; document.body.style.overflow = ''; }
}

/* ---------------- global wiring ---------------- */
document.addEventListener('click', e => {
  const person = e.target.closest('.p[data-id], .node[data-id]');
  if(person){ lastFocus = person; openPerson(person.dataset.id); return; }
  const shot = e.target.closest('[data-doc]');
  if(shot){ openLb(shot.dataset.doc, shot.dataset.caption || ''); }
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeLb(); closePerson(); }
});
