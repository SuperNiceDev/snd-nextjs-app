"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

import css from "./ImageExt.module.scss";

export interface IImageExt extends ImageProps {
  // quality?: number;
  // fill?: boolean;
  // priority?: boolean;
  // sizes?: string;
}

export const defaultProps = {
  quality: 85,
  fill: true,
  // resize: true,
  // priority: true,
  // sizes: `(max-width: 768px) 200vw,
  // (max-width: 1200px) 200vw,
  // 200vw`,
  // sizes: '150vw',
  // sizes: `(max-width: 768px) 100vw,
  // (max-width: 1200px) 100vw,
  // 100vw`,
};

const ImageExt = ({ className, src, alt, ...rest }: IImageExt) => {
  const [show, setShow] = useState(false);

  const onLoad = () => {
    setShow(true);
  };

  // console.log("ImageExt rest: ", rest);

  return (
    <Image
      {...defaultProps}
      {...rest}
      className={`${css.root}${show ? ` ${css.show}` : ""}${
        className ? ` ${className}` : ""
      }`}
      src={src}
      alt={alt}
      onLoad={onLoad}
    />
  );
};

export default ImageExt;
