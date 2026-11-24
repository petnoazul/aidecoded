(function(){
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const box = document.getElementById("materials");
  box.innerHTML = MATERIALS.map(m => {
    const isFile = m.link && !/^https?:/i.test(m.link);
    const tagName = m.soon || !m.link ? "div" : "a";
    const attrs = tagName === "a"
      ? ` href="${esc(m.link)}"${isFile ? "" : ' target="_blank" rel="noopener"'}` : "";
    const thumb = m.cover ? `<img src="${esc(m.cover)}" alt="" width="88" height="156" loading="lazy" decoding="async">` : `<span class="ph">jm▮</span>`;
    const cta = m.soon ? "" : `<b data-en-only>${isFile ? "Read ↗" : "Open ↗"}</b><b data-pt-only>${isFile ? "Ler ↗" : "Abrir ↗"}</b> · `;
    return `<${tagName} class="card${m.soon ? " soon" : ""}"${attrs}>
      <div class="thumb">${thumb}</div>
      <div>
        <div class="tag">${esc(m.tag)}</div>
        <h3 data-en-only>${esc(m.title_en)}</h3><h3 data-pt-only>${esc(m.title_pt)}</h3>
        <p class="pt" data-en-only>${esc(m.desc_en)}</p><p class="pt" data-pt-only>${esc(m.desc_pt)}</p>
        <div class="meta">${cta}${esc(m.meta)}</div>
      </div>
    </${tagName}>`;
  }).join("");

  // language: auto-detect Portuguese browsers, remember the choice
  const root = document.documentElement, btn = document.getElementById("lang");
  let lang = "en";
  try { lang = localStorage.getItem("lang") || ((navigator.language||"").toLowerCase().startsWith("pt") ? "pt" : "en"); } catch(e){}
  const apply = l => { root.dataset.lang = l; root.lang = l === "pt" ? "pt-BR" : "en"; btn.textContent = l === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"; };
  apply(lang);
  btn.addEventListener("click", () => { lang = lang === "pt" ? "en" : "pt"; apply(lang); try{localStorage.setItem("lang",lang)}catch(e){} });
  document.getElementById("y").textContent = new Date().getFullYear();
})();
