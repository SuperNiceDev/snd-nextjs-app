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
        <div className="tw-mb-2">
          {`<InputText>`}
          <div>
            <InputText
              className="tw-px-2 tw-text-lime-700 tw-bg-gray-700 tw-border tw-border-lime-700"
              placeholder="InputText placeholder prop test"
              // value="InputText value prop test"
            />
          </div>
          {`</InputText>`}
        </div>
        <MuiTest />
        {`<Footer/>`}
      </div>

      {`</MainPageClient>`}
    </div>
  );
};

export default MainPageClient;
