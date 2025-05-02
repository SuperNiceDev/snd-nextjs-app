const getPopulateSlugFilter = (slug: string) => {
  return `filters[slug][$eq]=${slug}`;
};

export default getPopulateSlugFilter;
