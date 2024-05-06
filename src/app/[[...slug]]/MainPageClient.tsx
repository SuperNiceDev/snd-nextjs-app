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
      <div className="m-2 text-3xl font-bold underline">Tailwind</div>
      <Stack
        className="m-2 text-3xl font-bold underline"
        spacing={2}
        direction="row"
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default MainPageClient;
