import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

/*
 * Páginas de tratamento: no build, gera uma cópia do index.html para cada rota
 * (ex.: /ffsculpt/index.html) com título, descrição e imagem de compartilhamento
 * próprios. Assim o WhatsApp e as redes mostram a miniatura certa de cada página.
 */
const SITE_URL = "https://draisabellatovar.com.br";
const PAGE_META = [
  {
    path: "emagrecimento",
    title: "Dra. Isabella Tovar | Emagrecimento e Recomposição Corporal",
    description:
      "Acompanhamento médico completo para um emagrecimento saudável, consistente e duradouro, com a Dra. Isabella Tovar em Goiânia.",
  },
  {
    path: "ffsculpt",
    title: "Dra. Isabella Tovar | Método FFSculpt em Goiânia",
    description:
      "Redefina suas curvas com segurança médica, sem cortes e sem cicatrizes. Método FFSculpt com a Dra. Isabella Tovar em Goiânia. Faça sua pré-avaliação.",
  },
  {
    path: "intima",
    title: "Dra. Isabella Tovar | Regeneração e Estética Íntima",
    description:
      "Harmonização íntima feminina com a Dra. Isabella Tovar: procedimentos sem corte, com foco em saúde, conforto e autoestima. Avaliação individualizada.",
  },
  {
    path: "injetaveis",
    title: "Dra. Isabella Tovar | Terapias Injetáveis",
    description:
      "Protocolos personalizados de suplementação oral e injetável, com indicação médica. Dra. Isabella Tovar em Goiânia.",
  },
];

const escapeAttr = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const pageMetaPlugin = () => ({
  name: "page-meta",
  apply: "build" as const,
  writeBundle(options: { dir?: string }) {
    const outDir = options.dir || path.resolve(__dirname, "dist");
    const indexPath = path.join(outDir, "index.html");
    if (!fs.existsSync(indexPath)) return;
    const base = fs.readFileSync(indexPath, "utf-8");

    for (const page of PAGE_META) {
      const url = `${SITE_URL}/${page.path}`;
      const image = `${SITE_URL}/og/${page.path}.jpg`;
      const title = escapeAttr(page.title);
      const description = escapeAttr(page.description);
      const html = base
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
        .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);

      const dir = path.join(outDir, page.path);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html);
      fs.writeFileSync(path.join(outDir, `${page.path}.html`), html);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), pageMetaPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
