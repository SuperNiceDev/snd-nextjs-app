"use client";

import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputText from "snd-react-lib/components/atoms/InputText";
import Text from "snd-react-lib/components/atoms/Text";

import BasicSelect from "@/components/mui/BasicSelect";

export default function MuiElementsTest() {
  return (
    <div className="MuiElementsTest">
      <code>{`<MuiElementsTest>`}</code>

      <div className={`tw:px-4`}>
        <div className="tw:mb-2">
          <code>{`<Text> (snd-react-lib)`}</code>
          <Text className="tw:text-fuchsia-800_" text="Text prop text test" />
          <code>{`</Text>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<InputText> (snd-react-lib)`}</code>
          <div>
            <InputText
              className="tw:px-2 tw:text-fuchsia-800_ tw:bg-gray-800_ tw:border tw:border-fuchsia-800_"
              placeholder="InputText prop placeholder test"
              // value="InputText prop value test"
            />
          </div>
          <code>{`</InputText>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<h1>`}</code>
          <h1 className="tw:text-3xl tw:font-bold tw:text-fuchsia-800_">
            {`Tailwind <h1 />`}
          </h1>
          <code>{`</h1>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<Typography variant="h1">`}</code>
          <Typography
            className="tw:text-3xl tw:font-bold tw:text-fuchsia-800_"
            variant="h1"
            // component="div"
          >
            {`Mui <Typography variant="h1" />`}
          </Typography>
          <code>{`</Typography>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<BasicSelect>`}</code>
          <BasicSelect />
          <code>{`</BasicSelect>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<Stack>`}</code>
          <Stack
            className="tw:my-4 tw:text-3xl tw:font-bold tw:underline tw:text-fuchsia-800_"
            spacing={2}
            direction="column"
          >
            <Button
              className="tw:text-fuchsia-800_ tw:bg-fuchsia-800_"
              variant="contained"
            >
              Button variant Contained
            </Button>
            <Button
              className="tw:text-fuchsia-800_ tw:bg-fuchsia-800_"
              variant="outlined"
            >
              Button variant Outlined
            </Button>
            <Button
              className="tw:text-fuchsia-800_ tw:bg-fuchsia-800_"
              variant="text"
            >
              Button variant Text
            </Button>
          </Stack>
          <code>{`</Stack>`}</code>
        </div>
      </div>

      <code>{`</MuiElementsTest>`}</code>
    </div>
  );
}
