module.exports = ({ env }) => [
  {
    name: "strapi::cors",
    config: {
      origin: ["https://backend-wpof.onrender.com"],
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
