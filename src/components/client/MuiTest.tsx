import React from "react";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputText from "@src/components/atoms/InputText";
import Text from "@src/components/atoms/Text";

export default function MuiTest() {
  return (
    <div className={``}>
      <code>{`<MuiTest>`}</code>

      <main className={`tw:px-4`}>
        <div className="tw:mb-2">
          <code>{`<Text> (snd-react-lib)`}</code>
          <Text className="tw:text-lime-700_" text="Text prop text test" />
          <code>{`</Text>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<InputText> (snd-react-lib)`}</code>
          <div>
            <InputText
              className="tw:px-2 tw:text-lime-700_ tw:bg-gray-700_ tw:border tw:border-lime-700_"
              placeholder="InputText prop placeholder test"
              // value="InputText prop value test"
            />
          </div>
          <code>{`</InputText>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<h1>`}</code>
          <h1 className="tw:text-3xl tw:font-bold tw:text-lime-700_">
            {`Tailwind <h1 />`}
          </h1>
          <code>{`</h1>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<Typography variant="h1">`}</code>
          <Typography
            className="tw:text-3xl tw:font-bold tw:text-lime-700_"
            variant="h1"
            // component="div"
          >
            {`Mui <Typography variant="h1" />`}
          </Typography>
          <code>{`</Typography>`}</code>
        </div>

        <div className="tw:mb-2">
          <code>{`<Stack>`}</code>
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
          <code>{`</Stack>`}</code>
        </div>
      </main>

      <code>{`</MuiTest>`}</code>
    </div>
  );
}
