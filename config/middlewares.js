module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      formLimit: '75mb',   // increase form size
      jsonLimit: '75mb',   // increase JSON body size
      textLimit: '75mb',
      formidable: {
        maxFileSize: 75 * 1024 * 1024, // 75MB
      },
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            process.env.BUNNY_PULL_ZONE,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            process.env.BUNNY_PULL_ZONE,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
