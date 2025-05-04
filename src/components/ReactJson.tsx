"use client";

import dynamic from "next/dynamic";

const ReactJsonLib = dynamic(() => import("react-json-view"), { ssr: false });

export default function ReactJson({ src }: any) {
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
