//Q1) Given two array of points one representing the x-coordinate and one representing the y-coordinate and a integer
// k,return the k closest points to origin(0,0)
// The distance between two points is Euclidean distance sqr_root((x1-x2)^2+(y1-y2)^2)
// Answer can be written in any order
// Example:
// Input :x = [1,2,3];
// y = [2,3,4];
// K = 2;
// Output:
// Here
// Distance between (1,2) and origin is sqrt(5)
// Distance between (2,3) and origin is sqrt(13)
// Distance between (3,4) and origin is sqrt(25)
// As sqrt(5)<sqrt(13)<sqrt(25) so the closest points will be
// (1,2),(2,3),(3,4).As we need closest 2 points the answer will be (1,2) and (2,3)

//Answer:-
let x = [0, 1, 2, 1, 0, 3, 4, 5];
let y = [0, 1, 4, 3, 2, 1, 3, 3];
let k = 4;

let points = [];
for (let i = 0; i < x.length; i++) {
  let temp = [x[i], y[i]];
  points.push(temp);
}

function compare(point1, point2) {
  //point1=> [x,y]
  //point2=>[x,y]

  let distance1 = Math.sqrt(point1[0] * point1[0] + point1[1] * point1[1]);
  let distance2 = Math.sqrt(point2[0] * point2[0] + point2[1] * point2[1]);

  return distance1 - distance2;
}
points.sort(compare);
console.log(points);
console.log(points.slice(0, k));
