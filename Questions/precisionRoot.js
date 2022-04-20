// Q) Given a positive number n and precision p, find the square root of the number upto decimal places using binary search.
// Examples:
// Input : number = 50, precision = 3
// Output : 7.071
// Input : number = 10, precision = 4
// Output : 3.1622

let n = 17;
let precision = 3;

let start = 0;
let end = n;
let ans = -1;
let mid = 0;
while (end - start > Math.pow(10, -precision)) {
  console.log(mid);
  mid = (start + end) / 2;
  if (mid * mid == n) {
    ans = mid;
    break;
  } else if (mid * mid > n) {
    end = mid;
  } else {
    start = mid;
  }
}
ans = mid;
console.log(ans); // 4.122
