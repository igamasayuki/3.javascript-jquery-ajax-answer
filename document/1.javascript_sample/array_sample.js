"use strict";

console.log("配列の基本");
const ages = [23, 46, 51, 30, 19];
// let ages = new Array(23,46,51,30,20); ←こちらの記述でもOK

console.log("配列の添え字２の要素は「" + ages[2] + "」です。");

for (let i = 0; i < ages.length; i++) {
  // ←配列の個数を取得する場合は、lengthが使えます
  console.log(ages[i] + "歳");
}

// 他言語で言うところのfor-each文はJavaScriptではfor-of文になり、
// 配列の要素を全部繰り返す際に使用することができます。
for (const age of ages) {
  console.log(age);
}

// ====================
// from関数
// ====================
console.log("from関数");
console.log(Array.from("abc")); // ['a', 'b', 'c'] が作られる

const set = new Set();
set.add("swim");
set.add("bile");
set.add("run");

console.log(Array.from(set)); // SetからArray(配列)が作られる

// ====================
// filter関数
// ====================
console.log("filter関数");
const prices = [200, 100, 300];

const results = prices.filter((price) => price > 100);

console.log(results); //  [200, 300]という新しい配列が作られる

// 以下と同様の処理
const results2 = [];
for (const price of prices) {
  if (price > 100) {
    results2.push(price);
  }
}
console.log(results2); //  [200, 300]

// ====================
// find関数
// ====================
console.log("find関数");
const epmloyeeIds = [5, 10, 8, 130, 44];

const found = epmloyeeIds.find((employeeId) => employeeId === 10);

console.log(found); // 10

// ====================
// map関数
// ====================
console.log("map関数");
const numbers = [1, 2, 3, 4];

const squares = numbers.map((num) => num ** 2); // numに1,2,3,4が順番に入る

console.log(squares); // [1, 4, 9, 16]

console.log("map関数の動きをfor文で表現");
const squares2 = [];
for (const num of numbers) {
  squares2.push(num ** 2);
}
console.log(squares2); // [1, 4, 9, 16]