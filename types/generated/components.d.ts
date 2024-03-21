import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonAbout extends Schema.Component {
  collectionName: 'components_common_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface CommonAnimated extends Schema.Component {
  collectionName: 'components_common_animateds';
  info: {
    displayName: 'animated';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface CommonCertificate extends Schema.Component {
  collectionName: 'components_common_certificates';
  info: {
    displayName: 'Certificate';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface NavigationNavigationElement extends Schema.Component {
  collectionName: 'components_navigation_navigation_elements';
  info: {
    displayName: 'Navigation Element';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    status: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface NavigationNavigation extends Schema.Component {
  collectionName: 'components_navigation_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    status: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    hasLink: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    subs: Attribute.Component<'navigation.navigation-element', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.about': CommonAbout;
      'common.animated': CommonAnimated;
      'common.certificate': CommonCertificate;
      'navigation.navigation-element': NavigationNavigationElement;
      'navigation.navigation': NavigationNavigation;
    }
  }
}
