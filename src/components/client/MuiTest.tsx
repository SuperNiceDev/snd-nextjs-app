import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputText from "@src/components/atoms/InputText";
import Text from "@src/components/atoms/Text";

export default function MuiTest() {
  return (
    <div className={``}>
      {`<MuiTest>`}

      <main className={`tw:px-4`}>
        <div className="tw:mb-2">
          {`<Text>`}
          <Text className="tw:text-lime-700_" text="Text text prop test" />
          {`</Text>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw:mb-2">
          {`<InputText>`}
          <div>
            <InputText
              className="tw:px-2 tw:text-lime-700_ tw:bg-gray-700_ tw:border tw:border-lime-700"
              placeholder="InputText placeholder prop test"
              // value="InputText value prop test"
            />
          </div>
          {`</InputText>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw:mb-2">
          {`<h1>`}
          <h1 className="tw:text-3xl tw:font-bold tw:text-lime-700_">
            {`Tailwind <h1 />`}
          </h1>
          {`</h1>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw:mb-2">
          {`<Typography variant="h1">`}
          <Typography
            className="tw:text-3xl tw:font-bold tw:text-lime-700_"
            variant="h1"
            // component="div"
          >
            {`Mui <Typography variant="h1" />`}
          </Typography>
          {`</Typography>`}
        </div>

        <div className="line">{`// -------------------------`}</div>

        <div className="tw:mb-2">
          {`<Stack>`}
          <Stack
            className="tw:my-4 tw:text-3xl tw:font-bold tw:underline tw:text-lime-700_"
            spacing={2}
            direction="column"
          >
            <Button variant="contained">Button variant Contained</Button>
            <Button variant="outlined">Button variant Outlined</Button>
            <Button className="tw:text-lime-700__" variant="text">
              Button variant Text
            </Button>
          </Stack>
          {`</Stack>`}
        </div>
      </main>

      {`</MuiTest>`}
    </div>
  );
}
