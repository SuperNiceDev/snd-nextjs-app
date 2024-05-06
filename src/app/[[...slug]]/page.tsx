import generateMetadataCst from "./generateMetadata";
import generateStaticParamsCst from "./generateStaticParams";
import MainPage from "./MainPage";

export const generateMetadata = generateMetadataCst;
export const generateStaticParams = generateStaticParamsCst;
export const dynamicParams = true;

export default async function page(args: any) {
  return <MainPage {...args} />;
}
