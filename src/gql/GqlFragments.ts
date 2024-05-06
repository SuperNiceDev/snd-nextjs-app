import { gql } from "@apollo/client";

export const AcfHtmlHeaderFrgmt = gql`
  fragment AcfHtmlHeaderFrgmt on Page_Acfhtmlheader {
    headerTitle
    headerDescription
    headerKeywords
  }
`;

export const ImageFrgmt = gql`
  fragment ImageFrgmt on MediaItem {
    altText
    sourceUrl
    title
  }
`;

export const VideoFrgmt = gql`
  fragment VideoFrgmt on MediaItem {
    altText
    mediaItemUrl
    title
  }
`;

export const AcftemplatesFrgmt = gql`
  ${ImageFrgmt}
  fragment AcftemplatesFrgmt on Page_Acftemplates {
    options {
      allowSearchEngines
      showSubPages
    }
    sections {
      options {
        isFullscreen
      }
      modules {
        ... on Page_Acftemplates_sections_Modules_Spacer {
          fieldGroupName
          height
          heightDesktop
        }
        ... on Page_Acftemplates_sections_Modules_Rtf {
          fieldGroupName
          text
          options {
            size
            tag
            align
          }
        }
        ... on Page_Acftemplates_sections_Modules_Image {
          fieldGroupName
          img {
            ...ImageFrgmt
          }
          imgDesktop {
            ...ImageFrgmt
          }
          options {
            link {
              ... on Page {
                uri
              }
            }
            text
            isLcp
          }
        }
        ... on Page_Acftemplates_sections_Modules_Home {
          fieldGroupName
          img {
            ...ImageFrgmt
          }
          imgDesktop {
            ...ImageFrgmt
          }
          text
        }
        ... on Page_Acftemplates_sections_Modules_Teaser {
          fieldGroupName
          items {
            img {
              ...ImageFrgmt
            }
            imgDesktop {
              ...ImageFrgmt
            }
            link {
              ... on Page {
                uri
              }
            }
            text
            options {
              isLcp
            }
          }
        }
      }
    }
  }
`;
