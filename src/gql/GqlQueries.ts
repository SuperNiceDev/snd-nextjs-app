import { gql } from "@apollo/client";

import { AcfHtmlHeaderFrgmt, AcftemplatesFrgmt } from "./GqlFragments";

export const NavLinks = gql`
  fragment NavLinks on Page_Acfglobals_Nav_nav {
    title
    link {
      ... on Page {
        uri
      }
    }
    externLink
  }
`;

export const FooterLinks = gql`
  fragment FooterLinks on Page_Acfglobals_Footer_nav {
    title
    link {
      ... on Page {
        uri
      }
    }
    externLink
  }
`;

export const GET_NAV = gql`
  ${NavLinks}
  ${FooterLinks}
  query ($uri: String! = "/") {
    pageBy(uri: $uri) {
      acfGlobals {
        nav {
          nav {
            ...NavLinks
          }
        }
        footer {
          nav {
            ...FooterLinks
          }
        }
      }
    }
  }
`;

export const GET_PAGE_HEADER_BY_URI = gql`
  ${AcfHtmlHeaderFrgmt}
  query ($uri: String = "/") {
    allSettings {
      generalSettingsTitle
    }
    pageBy(uri: $uri) {
      uri
      slug
      title

      ... on Page {
        acfHtmlHeader {
          ...AcfHtmlHeaderFrgmt
        }

        acfTemplates {
          options {
            allowSearchEngines
          }
        }
      }
    }
  }
`;

export const GET_PAGE_BY_URI = gql`
  ${AcfHtmlHeaderFrgmt}
  ${AcftemplatesFrgmt}
  query ($uri: String = "/") {
    allSettings {
      generalSettingsTitle
    }
    pageBy(uri: $uri) {
      uri
      slug
      title

      template {
        templateName
      }

      ... on Page {
        acfHtmlHeader {
          ...AcfHtmlHeaderFrgmt
        }

        acfTemplates {
          ...AcftemplatesFrgmt
        }
      }
    }
  }
`;

const PageFrgm = gql`
  ${AcfHtmlHeaderFrgmt}
  fragment PageFrgm on Page {
    uri
    slug
    acfHtmlHeader {
      ...AcfHtmlHeaderFrgmt
    }
  }
`;

export const GET_ALL_SUBPAGES_HEADER_INFOS_OF_PARENT = gql`
  ${PageFrgm}
  query ($parentId: ID = 0) {
    allSettings {
      generalSettingsTitle
    }
    pages(
      first: 100
      where: { parent: $parentId, orderby: { field: MENU_ORDER, order: ASC } }
    ) {
      nodes {
        ...PageFrgm

        children(
          first: 100
          where: { orderby: { field: MENU_ORDER, order: ASC } }
        ) {
          nodes {
            ...PageFrgm

            ... on Page {
              children(
                first: 100
                where: { orderby: { field: MENU_ORDER, order: ASC } }
              ) {
                nodes {
                  ...PageFrgm

                  ... on Page {
                    children(
                      first: 100
                      where: { orderby: { field: MENU_ORDER, order: ASC } }
                    ) {
                      nodes {
                        ...PageFrgm

                        ... on Page {
                          children(
                            first: 100
                            where: {
                              orderby: { field: MENU_ORDER, order: ASC }
                            }
                          ) {
                            nodes {
                              ...PageFrgm

                              ... on Page {
                                children(
                                  first: 100
                                  where: {
                                    orderby: { field: MENU_ORDER, order: ASC }
                                  }
                                ) {
                                  nodes {
                                    ...PageFrgm
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PAGES = gql`
  ${AcfHtmlHeaderFrgmt}
  ${AcftemplatesFrgmt}
  query {
    pages(
      first: 100
      where: { parent: 0, orderby: { field: MENU_ORDER, order: ASC } }
    ) {
      nodes {
        uri
        slug
        title

        template {
          templateName
        }

        acfHtmlHeader {
          ...AcfHtmlHeaderFrgmt
        }

        acfTemplates {
          ...AcftemplatesFrgmt
        }

        children(
          first: 100
          where: { orderby: { field: MENU_ORDER, order: ASC } }
        ) {
          nodes {
            uri
            slug

            ... on Page {
              title
              acfTemplates {
                ...AcftemplatesFrgmt
              }
            }
          }
        }
      }
    }
  }
`;
