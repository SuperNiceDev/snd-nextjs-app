const getLocale = (slug: string[]) => {
  return slug?.[0] === "de" ? `&locale=de` : "";
};

export default getLocale;
