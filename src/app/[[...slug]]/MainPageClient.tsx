"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// import Sections from "@/components/organisms/Sections";
// import Footer from "@/components/organisms/Footer";

import css from "./MainPageClient.module.scss";

const MainPageClient = ({ sections, footer }: any) => {
  // console.log("MainPageClient() sections: ", sections);

  return (
    <div className={`${css.root} MainPageClient`}>
      <main className={css.main}>
        MainPageClient
        {/*  */}
        {/* <Sections items={sections} /> */}
      </main>
      Footer
      {/* <Footer items={footer?.nav} /> */}
      <h1 className="tw-m-2 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700">
        Tailwind
      </h1>
      <Stack
        className="tw-m-2 tw-text-3xl tw-font-bold tw-underline tw-text-lime-700"
        spacing={2}
        direction="row"
      >
        <Button className="tw-text-lime-700" variant="text">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default MainPageClient;
