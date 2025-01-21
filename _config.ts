import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import feed from "lume/plugins/feed.ts";

const site = lume();
site.use(
  tailwindcss({
    options: {
      plugins: [typography],
    },
  })
);
site.use(postcss());
site.use(
  feed({
    output: ["/feed.xml", "/feed.json"],
    query: "type=note",
    info: {
      title: "charlieroth.me",
      description: "Notes from Charlie Roth",
      published: new Date(),
      lang: "en",
      generator: true,
      authorName: "Charlie Roth",
      authorUrl: "https://charlieroth.me",
    },
    items: {
      title: "=title",
      description: "=excerpt",
      published: "=date",
      updated: undefined,
      lang: "en",
      authorName: "Charlie Roth",
      authorUrl: "https://charlieroth.me",
    },
  })
);

export default site;
