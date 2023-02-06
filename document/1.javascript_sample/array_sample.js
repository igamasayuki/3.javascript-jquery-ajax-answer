"use strict;";

let ages = [23, 46, 51, 30, 19];
// let ages = new Array(23,46,51,30,20); ←こちらの記述でもOK

console.log("配列の添え字２の要素は「" + ages[2] + "」です。");

for (let i = 0; i < ages.length; i++) {
  // ←配列の個数を取得する場合は、lengthが使えます
  console.log(ages[i] + "歳");
}

// 他言語で言うところのfor-each文はJavaScriptではfor-of文になり、
// 配列の要素を全部繰り返す際に使用することができます。
for (let age of ages) {
  console.log(age);
}

// ====================
// fromメソッド
// ====================
console.log(Array.from("abc")); // ['a', 'b', 'c'] が作られる

const set = new Set();
set.add("swim");
set.add("bile");
set.add("run");

console.log(Array.from(set)); // SetからArray(配列)が作られる

// ====================
// filterメソッド
// ====================
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
// findメソッド
// ====================
const epmloyeeIds = [5, 10, 8, 130, 44];

const found = epmloyeeIds.find((employeeId) => employeeId === 10);

console.log(found); // 10

// ====================
// 連想配列
// ====================
const human = {
  firstName: "Masayuki",
  lastName: "Iga",
  birthMonth: 7,
  1: "first", // keyを数字にすることも可能
  趣味: "トライアスロン", // 全角文字をkey値に使用できる。Keyは' や " で囲んでも良い。
};
//要素へのアクセス
console.log(human["firstName"]); // Masayuki ※keyはダブルorシングルクウォート必須
console.log(human.lastName); // Iga
console.log(human[1]); // first // 数字がkeyの場合
// console.log(human.1); // エラー

//要素への代入
human["firstName"] = "Taro"; // "Masayuki"が"Taro"に上書きされる
human["lastName"] = "Yamada"; // "Iga"が"Yamada"に上書きされる
