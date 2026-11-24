/* ============================================================
   HOW TO ADD A NEW MATERIAL / COMO ADICIONAR UM MATERIAL NOVO
   1. Put the file in the "files" folder (e.g. files/prompt-pack.pdf).
      Optional cover image (portrait 9:16, 300x533 px) in the "img" folder.
   2. Copy one block below, paste it at the TOP of the list, edit the text.
      - link: "files/your-file.pdf" or any web address (https://...)
      - cover: "img/your-cover.jpg" or "" to show the jm logo
      - soon: true shows it as "coming soon" (no link)
   ============================================================ */
const MATERIALS = [
  {
    tag: "Study guide · Guia de estudo",
    title_en: "The Claude certification, decoded",
    title_pt: "A certificação Claude, decodificada",
    desc_en: "A 5-step roadmap from your first free course to exam day.",
    desc_pt: "Roteiro em 5 passos, do primeiro curso grátis até a prova.",
    meta: "PDF · 9 pages · EN",
    link: "files/ai-decoded-free-study-guide.pdf",
    cover: "img/guide-cover.jpg",
    soon: false
  },
  {
    tag: "Prompts",
    title_en: "Prompt pack: save 1 hour a day",
    title_pt: "Pacote de prompts: ganhe 1 hora por dia",
    desc_en: "Copy-and-paste prompts for email, spreadsheets and writing.",
    desc_pt: "Prompts prontos para e-mail, planilhas e textos.",
    meta: "Coming soon · Em breve",
    link: "",
    cover: "",
    soon: true
  }
];
