export type SearchParamsType = { [key: string]: string | string[] | undefined };

export type PageParamsType = Promise<{ slug: string[] }>;

export type NavDataNavItemType = {
  id?: number;
  href?: null | string;
  label?: string;
  target?: null | string;
  isExternal?: boolean;
  page?: {
    id: number;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    documentId: string;
  };
};

export type NavDataType = {
  data?: {
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    documentId: string;
    navigation: {
      id: number;
      myText: string;
      items: NavDataNavItemType[];
    };
  };
  meta?: unknown;
};
