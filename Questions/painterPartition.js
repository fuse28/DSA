// You are provided with ‘n’ number of boards of length [b1, b2,..bn].There are ‘a’ painters available in the market and each painter
// takes one(1) unit time to paint one(1) unit of board. We need to find the minimum time to get the job done under the constraints
// that any painter will only paint contiguous sections of the board.

//  Note: Two painters cannot share boards to paint.
// Input:
// ● Array of boards(arr[])
// ● No of painters(a)

// Sample Input:
//  [10, 20, 30, 40]
//  2

// Sample Output:
//  60

function isPossible(arr, numberOfBoards, numberOfPainters, mid) {
  let painterCount = 1;
  let boardSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (boardSum + arr[i] <= mid) {
      boardSum += arr[i];
    } else {
      painterCount++;
      if (painterCount > numberOfPainters || arr[i] > mid) {
        return false;
      }
      boardSum = arr[i];
    }
  }
  return true;
}

function painterPartition(arr, numberOfBoards, numberOfPainters) {
  let start = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let end = sum;
  let ans = -1;

  let mid = start + Math.floor((end - start) / 2);

  while (start <= end) {
    if (isPossible(arr, numberOfBoards, numberOfPainters, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = start + Math.floor((end - start) / 2);
  }
  console.log(`Minimum time taken is ${ans} units`); // 60
}
painterPartition([10, 20, 30, 40], 2, 2);
