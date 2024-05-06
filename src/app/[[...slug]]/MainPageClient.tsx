"use client";

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
    </div>
  );
};

export default MainPageClient;
