"use client";

import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import BasicSelect from "@/components/mui/BasicSelect";

export default function MuiComponents() {
  return (
    <div className="MuiComponents twCenterContent">
      <code>{`<MuiComponents>`}</code>

      <div className={`px-4`}>
        <div className="mb-2">
          <code>{`<h1>`}</code>
          <h1 className="text-3xl font-bold text-fuchsia-800_">
            {`Tailwind <h1 />`}
          </h1>
          <code>{`</h1>`}</code>
        </div>

        <div className="mb-2">
          <code>{`<Typography variant="h1">`}</code>
          <Typography
            className="text-3xl font-bold text-fuchsia-800_"
            variant="h1"
            // component="div"
          >
            {`Mui <Typography variant="h1" />`}
          </Typography>
          <code>{`</Typography>`}</code>
        </div>

        <div className="mb-2">
          <code>{`<BasicSelect>`}</code>
          <BasicSelect />
          <code>{`</BasicSelect>`}</code>
        </div>

        <div className="mb-2">
          <code>{`<Stack>`}</code>
          <Stack
            className="my-4 text-3xl font-bold underline text-fuchsia-800_"
            spacing={2}
            direction="column"
          >
            <Button
              className="text-fuchsia-800_ bg-fuchsia-800_"
              variant="contained"
            >
              Button variant Contained
            </Button>
            <Button
              className="text-fuchsia-800_ bg-fuchsia-800_"
              variant="outlined"
            >
              Button variant Outlined
            </Button>
            <Button
              className="text-fuchsia-800_ bg-fuchsia-800_"
              variant="text"
            >
              Button variant Text
            </Button>
          </Stack>
          <code>{`</Stack>`}</code>
        </div>
      </div>

      <code>{`</MuiComponents>`}</code>
    </div>
  );
}
