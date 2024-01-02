module.exports = ({ env }) => [
  {
    name: "strapi::cors",
    config: {
      origin: [env("CORS_ORIGIN", "https://pick-your-purr.onrender.com")],
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
