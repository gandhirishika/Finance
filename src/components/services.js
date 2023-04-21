import Data from "../utils/Data";

export function getData() {
  const DataList = Data;
  return DataList;
}

export function filterData(DataType) {
  let filtredData = getData().filter((type) => type.type === DataType);
  return filtredData;
}
