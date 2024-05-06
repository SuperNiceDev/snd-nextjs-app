import { cloneDeep } from "@apollo/client/utilities";

import { modulesPropsSelector } from "./selectors";

const parsePageData = (data: any) => {
  const generalSettingsTitle = data?.allSettings?.generalSettingsTitle;
  const pageBy = data?.pageBy;
  const headerTitle = pageBy?.acfHtmlHeader?.headerTitle;
  const title = `${headerTitle} - ${generalSettingsTitle}`;
  const headerDescription = pageBy?.acfHtmlHeader?.headerDescription;
  const allowSearchEngines = pageBy?.acfTemplates?.options?.allowSearchEngines;
  const allowSearchEngines2 =
    pageBy?.acfTemplates?.options?.allowSearchEngines2;

  const sectionsTmp: any[] = pageBy?.acfTemplates?.sections;
  const sections: any[] = sectionsTmp?.map((sectionItem: any) => {
    const modules = sectionItem?.modules?.map((moduleItem: any) => {
      const props = modulesPropsSelector(moduleItem);
      return props;
    });
    const itemClone = cloneDeep(sectionItem);
    itemClone.modules = modules;
    return itemClone;
  });

  // console.log("parsePageData() sections: ", sections);

  return {
    title,
    headerDescription,
    allowSearchEngines,
    allowSearchEngines2,
    sections,
  };
};

export default parsePageData;
