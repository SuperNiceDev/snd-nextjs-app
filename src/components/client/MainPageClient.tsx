"use client";

import InputText from "snd-react-lib/components/atoms/InputText";
import MuiTest from "snd-react-lib/components/molecules/MuiTest";

import css from "./MainPageClient.module.scss";

const MainPageClient = ({ sections, footer }: any) => {
  // console.log("MainPageClient() sections: ", sections);

  return (
    <div className={`${css.root} MainPageClient`}>
      {`<MainPageClient>`}

      <InputText />

      <MuiTest />

      {`<Footer/>`}
      <br />
      {`</MainPageClient>`}
    </div>
  );
};

export default MainPageClient;
