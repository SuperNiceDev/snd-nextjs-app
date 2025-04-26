"use client";

import { useState } from "react";

import { Button } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("react-json-view"), { ssr: false });

const paramsOrBody = {
  a: "value_a",
  b: "value_b",
};

export default function ApiHelloTestPage() {
  const [data, setData] = useState<any>();

  const onGetBtnClick = async () => {
    setData(null);
    const res = await axios.get("/api/hello", {
      params: paramsOrBody,
    });
    setData(res);
    // console.log("onGetBtnClick() res.data: ", res.data);
  };

  const onPostJsonBtnClick = async () => {
    setData(null);
    const res = await axios.post("/api/hello", paramsOrBody);
    setData(res);
    // console.log("onPostJsonBtnClick() res.data: ", res.data);
  };

  const onPostFormDataBtnClick = async () => {
    setData(null);
    const formData = new FormData();
    formData.append("a", "value_a");
    formData.append("b", "value_b");
    const res = await axios.post("/api/hello", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setData(res);
    // console.log("onPostFormDataBtnClick() res.data: ", res.data);
  };

  return (
    <div className="ApiHelloTestPage tw:pt-20">
      <code>{`<ApiHelloTestPage>`}</code>
      <div className="tw:px-4">
        <div className="tw:pb-4">
          <Button className="" variant="contained" onClick={onGetBtnClick}>
            GET /api/hello
          </Button>
        </div>
        <div className="tw:pb-4">
          <Button className="" variant="contained" onClick={onPostJsonBtnClick}>
            POST /api/hello JSON
          </Button>
        </div>
        <div className="tw:pb-4">
          <Button
            className=""
            variant="contained"
            onClick={onPostFormDataBtnClick}
          >
            POST /api/hello FormData
          </Button>
        </div>
        {data && (
          <div className="tw:w-1/2 tw:text-xs">
            <ReactJson
              src={data}
              name="response"
              enableClipboard={false}
              theme="monokai"
            />
          </div>
        )}
      </div>
      <code>{`</ApiHelloTestPage>`}</code>
    </div>
  );
}
