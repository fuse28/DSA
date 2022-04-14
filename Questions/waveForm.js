// Q2) Given an array which is unsorted ,we need to sort the array into wave like array where
// arr[0]>arr[1]<=arr[2]>=arr[3]<=arr[4]>=arr[5].......
// Input:{9,8,7,6,5,21,2,4}
// Output:{4,2,6,5,8,7,21,9}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function waveSort() {
  let arr = [9, 8, 7, 6, 5, 21, 2, 4];

  for (let i = 1; i < arr.length; i++) {
    //case of even
    if (i % 2 == 0) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
      }
    } else {
      //case of odd
      if (arr[i - 1] < arr[i]) {
        swap(arr, i - 1, i);
      }
    }
  }
  console.log(arr);
}
waveSort();
