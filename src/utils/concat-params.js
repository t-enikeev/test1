export const concatParams = (params, excludedAttributes = [], main = ["limit"]) => {
  const cleanedObject = cleanObject(params);
  let stringifiedParams = "";
  for (let param in cleanedObject) {
    if (!excludedAttributes.includes(param)) {
      stringifiedParams += `${param}=${cleanedObject[param]}&`;
    }
  }

  return stringifiedParams;
};
export const cleanObject = (obj) => {
  const result = {};
  for (let i in obj) {
    if (obj[i] !== "" && obj !== undefined) {
      result[i] = obj[i];
    }
  }
  return result;
};
