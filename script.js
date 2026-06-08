function qs(sel){return document.querySelector(sel)}
function qsa(sel){return Array.prototype.slice.call(document.querySelectorAll(sel))}
function closeNav(){document.body.classList.remove('nav-open');var sb=qs('#sb');var btn=qs('#mobToggle');if(sb)sb.classList.remove('open');if(btn){btn.setAttribute('aria-expanded','false');btn.innerHTML='☰';}}
function openNav(){document.body.classList.add('nav-open');var sb=qs('#sb');var btn=qs('#mobToggle');if(sb)sb.classList.add('open');if(btn){btn.setAttribute('aria-expanded','true');btn.innerHTML='×';}}
function toggleNav(){document.body.classList.contains('nav-open')?closeNav():openNav()}
function show(id){
  qsa('.ds-sec').forEach(function(s){s.classList.remove('active')});
  var el=qs('#sec-'+id); if(el) el.classList.add('active');
  qsa('.sb-sub a,.sb-home-link').forEach(function(a){a.classList.remove('active')});
  var lnk=qs('#lnk-'+id); if(lnk) lnk.classList.add('active');
  var cats={color:'foundations',typography:'foundations',logo:'foundations',spacing:'foundations',buttons:'components',tags:'components',cards:'components',inputs:'components',navigation:'components',feedback:'components','pat-home':'patterns','pat-case':'patterns'};
  if(cats[id]) openCat(cats[id]);
  window.scrollTo(0,0);
  if(window.innerWidth<=1024) closeNav();
}
function openCat(name){var cat=qs('#cat-'+name),sub=qs('#sub-'+name);if(cat&&sub){cat.classList.add('open');sub.classList.add('open')}}
function toggleCat(name){var cat=qs('#cat-'+name),sub=qs('#sub-'+name);if(cat&&sub){cat.classList.toggle('open');sub.classList.toggle('open')}}
function copyCode(btn){var blk=btn.closest('.code-blk');if(!blk)return;navigator.clipboard.writeText(blk.querySelector('pre').innerText).then(function(){btn.textContent='Copied!';setTimeout(function(){btn.textContent='Copy'},1600)})}
function copyTok(btn,val){navigator.clipboard.writeText(val).then(function(){var orig=btn.textContent;btn.textContent='Copied!';setTimeout(function(){btn.textContent=orig},1400)})}
function filterNav(query){var q=(query||'').toLowerCase().trim();qsa('.sb-sub a').forEach(function(a){a.style.display=(!q||a.textContent.toLowerCase().includes(q))?'':'none'});if(q)['foundations','components','patterns'].forEach(openCat)}
document.addEventListener('DOMContentLoaded',function(){
  document.documentElement.setAttribute('data-theme','dark');
  var btn=qs('#mobToggle'); if(btn) btn.addEventListener('click',function(e){e.preventDefault();toggleNav()});
  var scrim=qs('#navScrim'); if(scrim) scrim.addEventListener('click',closeNav);
  openCat('foundations');
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape') closeNav();
  if(e.key==='/'&&document.activeElement.tagName!=='INPUT'){e.preventDefault();var s=qs('#sbSearch');if(s){s.focus();s.select()}}
});
window.addEventListener('resize',function(){if(window.innerWidth>1024) closeNav()});
