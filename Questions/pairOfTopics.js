// Q) The aim is to discover the number of pairs of indices {i, j} in two integer arrays A[] and B[] of equal size such that A[i] +
// A[j] > B[i] + B[j] and i < j.

// The basic technique is to verify if A[i] + A[j] > B[i] + B[j] for all possible pairs of {i, j} in the specified arrays. The concept
// of nested loops can be used to do this.
let arr1 = [2, 4, 5, 7];
let arr2 = [6, 8, 9, 1];

//how many pairs
let answer = 0;
for (let i = 0; i < arr1.length; i++) {
  for (j = i + 1; j < arr1.length; j++) {
    if (arr1[i] + arr1[j] > arr2[i] + arr2[j]) {
      answer++;
    }
  }
}
console.log(answer); //3
