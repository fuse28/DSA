function binarySearch(arr, numberToSearch) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start - end) / 2);
    if (arr[mid] === numberToSearch) {
      return mid;
    } else if (numberToSearch < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearch([2, 5, 6, 8, 9, 11, 22, 16], 8));
