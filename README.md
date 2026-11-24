# AI, decoded ▮

Site link-na-bio do Instagram **@joaomalheiros.ai**. HTML puro, sem build: a Vercel publica sozinha a cada alteração neste repositório.

## Como adicionar um material novo (pelo navegador)
1. Aqui no GitHub, abra a pasta `files` → **Add file → Upload files** e envie o PDF (ex.: `prompt-pack.pdf`). Capa opcional (retrato 9:16) vai em `img`.
2. Abra `materials.js` → ícone do lápis (Edit).
3. Copie um bloco `{ ... },` inteiro, cole logo abaixo do `[` e troque os textos:
   - `link`: `"files/prompt-pack.pdf"` ou um endereço `https://...`
   - `cover`: `"img/sua-capa.jpg"` ou `""` para mostrar o logo jm▮
   - `soon: true` mostra como "em breve" (sem link)
4. **Commit changes**. Em ~1 minuto o site atualiza.

## Estrutura
- `index.html` – página (EN/PT, troca automática pelo idioma do celular)
- `materials.js` – lista de materiais (o único arquivo que você precisa editar)
- `style.css`, `app.js` – visual e funcionamento
- `vercel.json` – cabeçalhos de segurança
- `files/` – PDFs e materiais para baixar
- `img/` – logo, capas e imagem de compartilhamento
