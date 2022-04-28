export const makeTree = (array) => {
  const arr = array
    .reduce((acc, curr) => {
      curr.children = array.filter((item) => item.parent?._id == curr._id);
      acc.push(curr);
      return acc;
    }, [])
    .filter((item) => item.parent?._id == null);
  return arr;
};
export const setPrefixes = (arr, depth = 0) => {
  return arr.map((node) => {
    if (depth > 0) node.title = "- ".repeat(depth) + node.title;
    if (node.children) node.children = setPrefixes(node.children, depth + 1);
    return node;
  });
};

export const makeFlatTree = (tree) => {
  let result = [];
  for (let i in tree) {
    result.push(tree[i]);
    if (tree[i].children) {
      result = [...result, ...makeFlatTree(tree[i].children)];
    }
  }
  return result;
};
export const cleanFlatTree = (arr) => {
  return arr.map(({ _id, title }) => {
    return {
      value: _id,
      title: title,
    };
  });
};
