"use client";

import InputText from "snd-react-lib/components/atoms/InputText";
import MuiTest from "snd-react-lib/components/molecules/MuiTest";

import css from "./MainPageClient.module.scss";

const MainPageClient = ({ sections, footer }: any) => {
  // console.log("MainPageClient() sections: ", sections);

  return (
    <div className={`${css.root} MainPageClient`}>
      {`<MainPageClient>`}

      <div className="tw-px-4">
        InputText:{" "}
        <span
          className="tw-text-lime-700 tw-border tw-border-lime-700 tw-bg-gray-700"
          style={{}}
        >
          <InputText
            className="tw-text-lime-700 tw-border tw-border-lime-700 tw-bg-gray-700"
            value="my value"
          />
        </span>
        <MuiTest />
        {`<Footer/>`}
      </div>

      {`</MainPageClient>`}
    </div>
  );
};

export default MainPageClient;
