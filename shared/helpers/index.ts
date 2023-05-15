export const extractValuesForKeyFormObjectArray = (
  objList: Array<Record<string, any>>,
  key: string
) => {
  return objList.map((obj) => {
    return obj[key];
  });
};

export const generateStaticPathListFromParamsArray = (
  paramsArray: Array<string>,
  paramName: string
) => {
  return paramsArray.map((val) => ({
    params: {
      [paramName]: val,
    },
  }));
};
