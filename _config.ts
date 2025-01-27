import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";
import feed from "lume/plugins/feed.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";

const site = lume({
  location: new URL("https://charlieroth.me"),
  server: {
    middlewares: [cacheBusting()],
  },
});
site.use(
  tailwindcss({
    options: {
      plugins: [typography],
    },
  })
);
site.copy("images");
site.use(postcss());
site.use(
  feed({
    output: ["/feed.xml", "/feed.json"],
    query: "type=post",
    info: {
      title: "charlieroth.me",
      description: "Blog posts by Charlie Roth",
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
