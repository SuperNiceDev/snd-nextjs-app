// import MuiTest from "snd-react-lib/components/molecules/MuiTest";
import MuiTestLocal from "../mui/MuiTest";
import css from "./Main.module.scss";

type MainProps = {
  sections: any[];
};

const Main = ({ sections }: MainProps) => {
  // console.log("Main() sections: ", sections);

  sections?.forEach((section) => {
    console.log("section: ", section);
  });

  return (
    <main className={`${css.root} Main tw:pt-20 tw:text-lime-700`}>
      <code>{`<Main>`}</code>

      <div className="tw:px-4 tw:flex">
        <div className="tw:w-1/2">
          <MuiTestLocal />
        </div>
        <div className="tw:w-1/2">
          {/*  */}
          {/* <MuiTest /> */}
        </div>
      </div>

      <code>{`</Main>`}</code>
    </main>
  );
};

export default Main;
