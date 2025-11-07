module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  'link-field': {
    enabled: true,
    config: {
      relations: {
        'api::page.page': {
          urlTemplate: '/{slug}',
        },
        'api::category.category': {
          urlTemplate: '/categories/{slug}',
        },
        'api::collection.collection': {
          urlTemplate: '/collections/{slug}',
        },
        "api::product.product": {
          urlTemplate: '/product/{slug}',
        }
      },
    },
  },
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      sizeLimit: 75 * 1024 * 1024,
      provider: '@nexide/strapi-provider-bunny',
      providerOptions: {
        api_key: env('BUNNY_API_KEY'),
        storage_zone: env('BUNNY_STORAGE_ZONE'),
        pull_zone: env('BUNNY_PULL_ZONE'),
        hostname: env('BUNNY_HOSTNAME'),
        upload_path: env('BUNNY_UPLOAD_PATH'),
      },
      breakpoints: {
        xlarge: 2560,
        large: 1920,
        medium: 1200,
        small: 768,
        xsmall: 64,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
