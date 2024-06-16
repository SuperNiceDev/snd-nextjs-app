"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import css from "./MainPageClient.module.scss";

const MainPageClient = ({ sections, footer }: any) => {
  console.log("MainPageClient() sections: ", sections);
  // console.log("MainPageClient() footer: ", footer);

  return (
    <div className={`${css.root} MainPageClient`}>
      {`<MainPageClient>`}

      <main className={css.main}>
        <h1 className="tw-m-2 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700">
          {`Tailwind <h1/>`}
        </h1>

        <Typography
          className="tw-m-3 tw-p-3 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700"
          variant="h2"
          gutterBottom
        >
          {`Mui <Typography/>`}
        </Typography>

        <Stack
          className="tw-m-2 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700"
          spacing={2}
          direction="column"
        >
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button className="tw-text-lime-700" variant="text">
            Text
          </Button>
        </Stack>
      </main>

      {`<Footer/>`}
      <br />
      {`</MainPageClient>`}
    </div>
  );
};

export default MainPageClient;
