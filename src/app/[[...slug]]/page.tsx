import MainPage from "./MainPage";
import generateMetadataCst from "./generateMetadata";
import generateStaticParamsCst from "./generateStaticParams";

export const generateMetadata = generateMetadataCst;
export const generateStaticParams = generateStaticParamsCst;
export const dynamicParams = true;

export default async function page(args: any) {
  return <MainPage {...args} />;
}
