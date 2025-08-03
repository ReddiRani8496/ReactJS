function getResultByPath(path, obj) {
  const pathArr = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = obj;
  for (const key of pathArr) {
    if (result === null) return null;
    if (result === undefined || !(key in result)) return undefined;
    result = result[key];
  }
  return result;
}

const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
