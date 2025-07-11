"use client";

import dynamic from "next/dynamic";

const ReactJsonLib = dynamic(() => import("react-json-view"), { ssr: false });

type PropsType = {
  src: object;
};

export default function ReactJson({ src }: PropsType) {
  if (!src) return;

  return (
    <ReactJsonLib
      src={src}
      name="response"
      enableClipboard={false}
      theme="ocean"
    />
  );
}
