export const imgPropSelector = (props: any): any => {
  return {
    src: props?.sourceUrl || null,
    alt: props?.altText || props?.title || "alt not set",
  };
};

export const videoPropSelector = (props: any): any => {
  return {
    src: props?.mediaItemUrl || null,
    alt: props?.altText || props?.title || "alt not set",
  };
};

export const propsSelector = (props: any): any => {
  const { img, imgDesktop, items, ...rest } = props;
  return {
    ...rest,
    img: imgPropSelector(img) || null,
    imgDesktop: imgPropSelector(imgDesktop) || null,
    priority: rest?.options?.isLcp || null,
  };
};

export const itemsPropsSelector = (items: any): any => {
  return items?.map((item: any): any => propsSelector(item));
};

export const modulesPropsSelector = (props: any): any => {
  const { items } = props;
  return {
    ...propsSelector(props),
    items: itemsPropsSelector(items) || null,
  };
};
