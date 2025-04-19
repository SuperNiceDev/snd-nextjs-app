"use client";

import MuiTest from "snd-react-lib/components/molecules/MuiTest";

import css from "./MainPageClient.module.scss";
import MuiTestLocal from "./MuiTest";

const MainPageClient = ({ sections, footer }: any) => {
  // console.log("MainPageClient() sections: ", sections);

  return (
    <div className={`${css.root} MainPageClient`}>
      {`<MainPageClient>`}

      <div className="tw:px-4 tw:flex">
        <div className="tw:w-1/2">
          <MuiTestLocal />
        </div>
        <div className="tw:w-1/2">
          <MuiTest />
        </div>
      </div>

      {`</MainPageClient>`}
    </div>
  );
};

export default MainPageClient;
