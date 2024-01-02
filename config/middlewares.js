module.exports = ({ env }) =>[({
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'https://backend-wpof.onrender.com/'),
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
});


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
