import type { Schema, Struct } from '@strapi/strapi';

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
    video: Schema.Attribute.Media<'videos'>;
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
      'category.card-tile': CategoryCardTile;
      'general.collection-banner': GeneralCollectionBanner;
      'general.hero': GeneralHero;
      'general.media-banner': GeneralMediaBanner;
      'general.page-banner': GeneralPageBanner;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
