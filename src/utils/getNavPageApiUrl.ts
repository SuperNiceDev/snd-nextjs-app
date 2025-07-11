import getLocale from "@/utils/getLocale";
import getPopulateSlugFilter from "@/utils/getPopulateSlugFilter";

const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

const getNavPageApiUrl = (slug: string[]) => {
  const slugTmp = `/${slug?.join("/") || ""}`;
  const filters = getPopulateSlugFilter(slugTmp);
  const locale = getLocale(slugTmp);
  const rootFields = ``;
  const sectionsFields = `&populate[sections][populate]=*`;
  const fields = `${rootFields}${sectionsFields}`;
  const publicationState = ``;
  // const publicationState = `&publicationState=live`;
  const url = `${apiUrl}/pages?${filters}${locale}${fields}${publicationState}`;

  return url;
};

export default getNavPageApiUrl;
