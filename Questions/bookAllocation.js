// We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of pages.
// You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a student is
// minimum.
// Each student will be allotted at least one book and in contiguous order. Find the minimum possible number and if the
// assignment is not valid, return -1

// Input:
// ● Array of books(arr[])
// ● No of students(s)

// Sample Input:
//  [12, 34, 67, 90]
//  2

// Sample Output:
//  113

function isPossible(arr, numberOfBooks, numberOfStudents, mid) {
  let studentCount = 1;
  let pageSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pageSum + arr[i] <= mid) {
      pageSum += arr[i];
    } else {
      studentCount++;
      if (studentCount > numberOfStudents || arr[i] > mid) {
        return false;
      }
      pageSum = arr[i];
    }
  }
  return true;
}

function bookAllocation(arr, numberOfBooks, numberOfStudents) {
  let start = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let end = sum;
  let ans = -1;

  let mid = start + Math.floor((end - start) / 2);

  while (start <= end) {
    if (isPossible(arr, numberOfBooks, numberOfStudents, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = start + Math.floor((end - start) / 2);
  }
  console.log(`Minimum Number of Pages= ${ans}`); //113
}
bookAllocation([10, 20, 30, 40], 2, 2);
