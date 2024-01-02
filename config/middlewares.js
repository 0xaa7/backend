module.exports = [
  {
    settings: {
      cors: {
        enabled: true,
        origin: ["https://your-frontend-app.com"], // Replace with your frontend app URL
      },
    },
  },

  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
