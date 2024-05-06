import React, { MouseEvent } from "react";
import { useRouter } from "next/navigation";

import { getNextParentHref } from "js-dom-utils";
import { TextExt } from "snd-react-lib/components/atoms/Text";

import css from "./TextCst.module.scss";

const TextCst = (props: any) => {
  const {
    className,
    options: { size = null, align = null, weight = null } = {},
    text,
  } = props;

  const clnClassName = className ? ` ${className}` : "";
  const clnAlign = align ? ` ${css[align]}` : "";
  const clnSize = size ? ` ${css[size]}` : "";
  const clnWeight = weight ? ` ${css[weight]}` : "";

  const router = useRouter();

  const onClick = (evt: MouseEvent) => {
    const [_, elemHref] = getNextParentHref(evt.target);
    if (!elemHref) return;

    const { origin } = window.location;
    const isSameDomain = elemHref.indexOf(origin) > -1;
    // console.log('elemHref: ', elemHref);

    if (isSameDomain) {
      evt.preventDefault();
      const path = elemHref.replace(origin, "");
      router.push(path, { scroll: false });
    }
  };

  return (
    <TextExt
      className={`${css.root}${clnAlign}${clnSize}${clnWeight}${clnClassName}`}
      text={text}
      style={props.style}
      Tag={props.options?.tag}
      onClick={onClick}
    />
  );
};

export default TextCst;
