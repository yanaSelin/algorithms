module.exports = function mergeSort(array = []) {
  const length = array.length;
  if (length <= 1) {
    return array;
  }
  const key = Math.floor(length / 2);
  const first = mergeSort(array.slice(0, key));
  const second = mergeSort(array.slice(key));
  const result = [];
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < length; i += 1) {
    const firstCurrent = first[firstIndex];
    const secondCurrent = second[secondIndex];
    if (firstCurrent === undefined) {
      result.push(secondCurrent);
      secondIndex += 1;
    } else if (secondCurrent === undefined || firstCurrent < secondCurrent) {
      result.push(firstCurrent);
      firstIndex += 1
    } else {
      result.push(secondCurrent);
      secondIndex += 1;
    }
  }

  return result;
}