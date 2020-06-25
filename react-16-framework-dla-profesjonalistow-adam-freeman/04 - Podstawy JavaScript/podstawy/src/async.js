import { sumValues } from "./sum";

export function asyncAdd(values) {
  return new Promise(callback =>
    setTimeout(() => {
      let total = sumValues(values);
      console.log(`Suma wyliczona asynchronicznie: ${total}`);
      callback(total);
    }, 500));
}
