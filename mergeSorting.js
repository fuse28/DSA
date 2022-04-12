function merge(arr1, arr2) {
  let arr3 = new Array(arr1.length + arr2.length);
  let ptr1 = 0;
  let ptr2 = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (ptr1 >= arr1.length) {
      arr3[i] = arr2[ptr2];
      ptr2++;
    } else if (ptr2 >= arr2.length) {
      arr3[i] = arr1[ptr1];
      ptr1++;
    } else if (arr1[ptr1] < arr2[ptr2]) {
      arr3[i] = arr1[ptr1];
      ptr1++;
    } else {
      arr3[i] = arr2[ptr2];
      ptr2++;
    }
  }
  return arr3;
}

// function merge(arr1, arr2) {
//   let arr3 = new Array(arr1.length + arr2.length);
//   let pointer1 = 0;
//   let pointer2 = 0;

//   for (let i = 0; i < arr3.length; i++) {
//     if (pointer1 >= arr1.length) {
//       arr3[i] = arr2[pointer2];
//       pointer2++;
//     } else if (pointer2 >= arr2.length) {
//       arr3[i] = arr1[pointer1];
//       pointer1++;
//     } else if (arr1[pointer1] < arr2[pointer2]) {
//       arr3[i] = arr1[pointer1];
//       pointer1++;
//     } else {
//       arr3[i] = arr2[pointer2];
//       pointer2++;
//     }
//   }

//   return arr3;
// }

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.ceil(arr.length / 2);
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid, arr.length);

  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);

  return merge(arr1, arr2);
}
console.log(mergeSort([25, 63, 12, 56, 47, 39, 48]));
// let results = mergeSort([25, 63, 12, 56, 47, 39, 48]);

// let MaximumEle = results[0];
// let MinimumEle = results.splice(-1)[0];
// let MaxMinEle = (document.getElementById(
//   "MaxMinEle"
// ).innerHTML = `Maximum Element is : ${MaximumEle}</br>
// Minimum Element is : ${MinimumEle}`);
