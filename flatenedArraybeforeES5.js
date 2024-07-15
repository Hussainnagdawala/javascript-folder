let str = "hussain";
// let strArr = str.split('').reverse().join('')
// console.log(strArr===str)
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    console.log("fasleadf");
  }
}
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);

let nestedArr = [2,5,3,2,44,4,5,[56, 4, 27, 9, 7, [2, 8, [6565, 565], 6, 9, 8], 1, 7, 9, 5],];
// let arr=[]

// before es5 feature
// ---- This takes an empty array and concate elements their in
let flatArr = [].concat.apply([], nestedArr);

// using spread operator
// ---- This takes an empty array and concate elements their in
let flatArr2 = [].concat(...nestedArr);

// ---- This first convert the arrahy to string then split it and then convert it to new array
let flatArr3 = nestedArr.toString().split(",").map(Number);

// ---- This is done using reduce 
let fatArr = nestedArr.reduce((acc, cur) => {
  return acc.concat(
    Array.isArray(cur) ? cur.reduce((a, c) => a.concat(c), []) : cur
  );
}, []);

flatArr.sort((a, b) => b - a);

