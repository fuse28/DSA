function ternarySearch(arr, k) {
  let start = arr[0];
  let end = arr.length - 1;
  while (start <= end) {
    let mid1 = start + Math.floor((end - start) / 3);
    let mid2 = end - Math.floor((end - start) / 3);
    if (arr[mid1] === k) {
      return mid1;
    } else if (arr[mid2 === k]) {
      return mid2;
    } else if (k < arr[mid1]) {
      end = mid1 - 1;
    } else if (k > arr[mid2]) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
  return -1;
}
console.log(ternarySearch([1, 2, 4, 5, 7, 12, 6, 10, 14], 5));
