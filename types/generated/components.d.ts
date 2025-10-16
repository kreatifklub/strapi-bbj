import type { Schema, Struct } from '@strapi/strapi';

export interface CategoryCardFaq extends Struct.ComponentSchema {
  collectionName: 'components_category_card_faqs';
  info: {
    displayName: 'Card - FAQ';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    collapsed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    question: Schema.Attribute.String;
  };
}

export interface CategoryCardIconAndText extends Struct.ComponentSchema {
  collectionName: 'components_category_card_icon_and_texts';
  info: {
    displayName: 'Card - Icon & Text';
    icon: 'information';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface CategoryCardSupport extends Struct.ComponentSchema {
  collectionName: 'components_category_card_supports';
  info: {
    displayName: 'Card - Support';
    icon: 'information';
  };
  attributes: {
    email: Schema.Attribute.Email;
    healdine: Schema.Attribute.String;
  };
}

export interface CategoryCardTile extends Struct.ComponentSchema {
  collectionName: 'components_category_card_tiles';
  info: {
    displayName: 'Card - Tile';
    icon: 'brush';
  };
  attributes: {
    headline: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface GeneralAbout extends Struct.ComponentSchema {
  collectionName: 'components_general_abouts';
  info: {
    displayName: 'About';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    headline: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface GeneralCollectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_general_collection_banners';
  info: {
    displayName: 'Collection Banner';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface GeneralCollectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_general_collection_grids';
  info: {
    displayName: 'Collection Grid';
    icon: 'brush';
  };
  attributes: {
    headline: Schema.Attribute.String;
    Tiles: Schema.Attribute.Component<'category.card-tile', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface GeneralCollectionTiles extends Struct.ComponentSchema {
  collectionName: 'components_general_collection_tiles';
  info: {
    displayName: 'Collection Tiles';
    icon: 'brush';
  };
  attributes: {
    Tiles: Schema.Attribute.Component<'category.card-tile', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface GeneralCta extends Struct.ComponentSchema {
  collectionName: 'components_general_ctas';
  info: {
    displayName: 'CTA';
    icon: 'link';
  };
  attributes: {
    headline: Schema.Attribute.String;
  };
}

export interface GeneralFaq extends Struct.ComponentSchema {
  collectionName: 'components_general_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    headline: Schema.Attribute.String;
    items: Schema.Attribute.Component<'category.card-faq', true>;
  };
}

export interface GeneralHero extends Struct.ComponentSchema {
  collectionName: 'components_general_heroes';
  info: {
    displayName: 'Hero';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    label: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface GeneralIllustrationBanner extends Struct.ComponentSchema {
  collectionName: 'components_general_illustration_banners';
  info: {
    displayName: 'Illustration Banner';
    icon: 'brush';
  };
  attributes: {
    headline: Schema.Attribute.String;
    illustration: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
  };
}

export interface GeneralMediaAndText extends Struct.ComponentSchema {
  collectionName: 'components_general_media_and_texts';
  info: {
    displayName: 'Media & Text';
    icon: 'brush';
  };
  attributes: {
    headline: Schema.Attribute.String;
    label: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images', true>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface GeneralMediaBanner extends Struct.ComponentSchema {
  collectionName: 'components_general_media_banners';
  info: {
    displayName: 'Media Banner';
    icon: 'brush';
  };
  attributes: {
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface GeneralPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_general_page_banners';
  info: {
    displayName: 'Page Banner';
    icon: 'brush';
  };
  attributes: {
    headline: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    middle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface GeneralPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_general_page_headers';
  info: {
    displayName: 'Page Header';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface GeneralProductsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_general_products_carousels';
  info: {
    displayName: 'Products Carousel';
    icon: 'stack';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface GeneralSupport extends Struct.ComponentSchema {
  collectionName: 'components_general_supports';
  info: {
    displayName: 'Support';
    icon: 'briefcase';
  };
  attributes: {
    Items: Schema.Attribute.Component<'category.card-support', true>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'category.card-faq': CategoryCardFaq;
      'category.card-icon-and-text': CategoryCardIconAndText;
      'category.card-support': CategoryCardSupport;
      'category.card-tile': CategoryCardTile;
      'general.about': GeneralAbout;
      'general.collection-banner': GeneralCollectionBanner;
      'general.collection-grid': GeneralCollectionGrid;
      'general.collection-tiles': GeneralCollectionTiles;
      'general.cta': GeneralCta;
      'general.faq': GeneralFaq;
      'general.hero': GeneralHero;
      'general.illustration-banner': GeneralIllustrationBanner;
      'general.media-and-text': GeneralMediaAndText;
      'general.media-banner': GeneralMediaBanner;
      'general.page-banner': GeneralPageBanner;
      'general.page-header': GeneralPageHeader;
      'general.products-carousel': GeneralProductsCarousel;
      'general.support': GeneralSupport;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
