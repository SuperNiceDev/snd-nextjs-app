import ReactJson from "@/components/ReactJson";

import css from "./Main.module.scss";

type MainProps = {
  sections: object[];
};

const Main = ({ sections }: MainProps) => {
  // console.log("Main() sections: ", sections);

  // sections?.forEach((section) => {
  //   console.log("section: ", section);
  // });

  return (
    <div className={`${css.root} Main twCenterContent`}>
      <code>{`<Main>`}</code>

      <div className="flex px-4">
        {sections?.map((item: object, idx: number) => {
          return (
            <div key={idx} className="lg:w-1/2">
              <ReactJson src={item} />
            </div>
          );
        })}
      </div>

      <code>{`</Main>`}</code>
    </div>
  );
};

export default Main;
