import MuiElementsTest from "../mui/MuiElementsTest";
import css from "./Main.module.scss";

type MainProps = {
  sections: any[];
};

const Main = ({ sections }: MainProps) => {
  // console.log("Main() sections: ", sections);

  // sections?.forEach((section) => {
  //   console.log("section: ", section);
  // });

  return (
    <main className={`${css.root} Main twCenterContent`}>
      <code>{`<Main>`}</code>

      <div className="tw:px-4 tw:flex">
        {sections?.map((item: any, idx: number) => {
          return (
            <div key={idx} className="tw:lg:w-1/2">
              {JSON.stringify(item)}
            </div>
          );
        })}
      </div>

      <div className="tw:px-4 tw:flex">
        <div className="tw:lg:w-1/2">
          <MuiElementsTest />
        </div>
        <div className="tw:lg:w-1/2"></div>
      </div>

      <code>{`</Main>`}</code>
    </main>
  );
};

export default Main;
