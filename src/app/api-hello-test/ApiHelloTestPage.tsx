"use client";

import { useState } from "react";

import axios from "axios";

import ReactJson from "@/components/ReactJson";
import { Button } from "@/components/ui/button";

const paramsOrBody = {
  a: "value_a",
  b: "value_b",
};

export default function ApiHelloTestPage() {
  const [data, setData] = useState<null | object>();

  const onGetBtnClick = async () => {
    setData(null);
    const res = await axios.get("/api/hello", {
      params: paramsOrBody,
    });
    setData(res);
  };

  const onPostJsonBtnClick = async () => {
    setData(null);
    const res = await axios.post("/api/hello", paramsOrBody);
    setData(res);
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
  };

  return (
    <div className="ApiHelloTestPage twCenterContent">
      <code>{`<ApiHelloTestPage>`}</code>
      <div className="px-4">
        <div className="pb-4">
          <Button className="" variant="default" onClick={onGetBtnClick}>
            GET /api/hello
          </Button>
        </div>
        <div className="pb-4">
          <Button className="" variant="default" onClick={onPostJsonBtnClick}>
            POST /api/hello JSON
          </Button>
        </div>
        <div className="pb-4">
          <Button
            className=""
            variant="default"
            onClick={onPostFormDataBtnClick}
          >
            POST /api/hello FormData
          </Button>
        </div>
        <ReactJson src={data} />
      </div>
      <code>{`</ApiHelloTestPage>`}</code>
    </div>
  );
}
