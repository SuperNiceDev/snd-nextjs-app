const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

const getNavRestApiUrl = (pathname: string | undefined | null = "/") => {
  const isDE = pathname?.indexOf("/de");
  const locale = isDE === 0 ? `locale=de` : "";

  // const level0 = `&populate[navigation][populate]=*`;
  const level0 = `&populate[0]=navigation`;
  const level1 = `&populate[1]=navigation.items`;
  const level2 = `&populate[2]=navigation.items.page`;
  const fields = `${level0}${level1}${level2}`;
  const url = `${apiUrl}/global?${locale}${fields}`;

  return url;
};

export default getNavRestApiUrl;
