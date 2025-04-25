"use client";

import { Button, Stack } from "@mui/material";
import axios from "axios";

const paramsOrBody = {
  a: "value_a",
  b: "value_b",
};

export default function ApiHelloTestPage() {
  const onGetBtnClick = async () => {
    const res = await axios.get("/api/hello", {
      params: paramsOrBody,
    });
    console.log("onGetBtnClick() res.data: ", res.data);
  };

  const onPostJsonBtnClick = async () => {
    const res = await axios.post("/api/hello", paramsOrBody);
    console.log("onPostJsonBtnClick() res.data: ", res.data);
  };

  const onPostFormDataBtnClick = async () => {
    const formData = new FormData();
    formData.append("a", "value_a");
    formData.append("b", "value_b");
    const res = await axios.post("/api/hello", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("onPostFormDataBtnClick() res.data: ", res.data);
  };

  return (
    <div className="ApiHelloTestPage tw:pt-20">
      <code>{`<ApiHelloTestPage>`}</code>
      <div className="tw:px-4">
        <code>{`<Stack>`}</code>
        <Stack className="tw:my-4" spacing={2} direction="column">
          <Button className="" variant="contained" onClick={onGetBtnClick}>
            GET /api/hello
          </Button>
          <Button className="" variant="contained" onClick={onPostJsonBtnClick}>
            POST /api/hello JSON
          </Button>
          <Button
            className=""
            variant="contained"
            onClick={onPostFormDataBtnClick}
          >
            POST /api/hello FormData
          </Button>
        </Stack>
        <code>{`</Stack>`}</code>
      </div>
      <code>{`</ApiHelloTestPage>`}</code>
    </div>
  );
}
