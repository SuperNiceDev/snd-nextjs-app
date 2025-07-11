const getLocale = (url: string, fallback: string = "en") => {
  const regex = /\/([a-z]{2})(?:\/|$)/i;
  const match = url.match(regex);

  if (match && match[1]) {
    return `&locale=${match[1]}`;
  } else {
    return `&locale=${fallback}`;
  }
};

export default getLocale;
