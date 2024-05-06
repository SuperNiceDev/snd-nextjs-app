const getAllPaths = (nodes: any, arr: any[] = [], prevSlug: string[] = []) => {
  nodes?.forEach((item: any) => {
    const { slug, children } = item;
    const slugArr = [...prevSlug, slug];
    arr.push({
      id: slugArr,
    });
    getAllPaths(children?.nodes, arr, slugArr);
  });
  return arr;
};

export default getAllPaths;
