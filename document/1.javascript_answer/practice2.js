"use strict";

// 演習8 解答
console.log("演習8 解答");
printName(); //関数宣言の前でも使用可能
function printName() {
  console.log("伊賀将之");
}
printName();

// 演習8-2 解答
console.log("演習8-2 解答");
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function multi(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
// アロー関数
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const sub = (num1, num2) => {
//   return num1 - num2;
// };
// const multi = (num1, num2) => {
//   return num1 * num2;
// };
// const div = (num1, num2) => {
//   return num1 / num2;
// };
console.log("5 + 3 = " + add(5, 3));
console.log("5 - 3 = " + sub(5, 3));
console.log("5 * 3 = " + multi(5, 3));
console.log("5 / 3 = " + div(5, 3));

// 演習9 解答
console.log("演習9 解答");
// printNameVariable(); //関数宣言の前だと使用不可能(巻き上げできないという)
const printNameVariable = () => {
  console.log("イガ");
};
printNameVariable();

// 演習9-2 解答
console.log("演習9-2 解答");
const addVariable = (num1, num2) => {
  return num1 + num2;
};
const subVariable = (num1, num2) => {
  return num1 - num2;
};
const multiVariable = (num1, num2) => {
  return num1 * num2;
};
const divVariable = (num1, num2) => {
  return num1 / num2;
};
console.log("5 + 3 = " + addVariable(5, 3));
console.log("5 - 3 = " + subVariable(5, 3));
console.log("5 * 3 = " + multiVariable(5, 3));
console.log("5 / 3 = " + divVariable(5, 3));

// 演習10 解答
console.log("演習10 解答");
var globalVal = 10; // ←グローバルスコープの変数
function func1() {
  var localVal = 20; // ←ローカルスコープ(関数スコープ)の変数
  console.log("globalVal:" + globalVal); // 10
  console.log("localVal:" + localVal); // 20
}
func1();
console.log("globalVal:" + globalVal); // 10
// console.log('localVal:' + localVal); // エラー

// 演習11 解答
console.log("演習11 解答");
if (true) {
  var x = 5;
}
console.log(x); // 5と出力
if (true) {
  let y = 5;
}
//console.log(y); // ReferenceErrorになる

// 演習12 解答
console.log("演習12 解答");
function calcTotal(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}
// アロー関数
// const calcTotal = (...args) => {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

console.log(calcTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 演習13 解答
console.log("演習13 解答");
const message = "I have a dream today";
const count = message.length;
console.log(count + "文字です");

// 演習14 解答
console.log("演習14 解答");

const emptyCharacter = "";
if (emptyCharacter.length === 0) {
  console.log("空文字です");
} else {
  console.log("空文字ではありません");
}

// 演習15 解答
console.log("演習15 解答");
const message2 = "I have a dream today";
const count2 = message.indexOf("a");
console.log("最初のaは" + count2 + "番目です");

// 演習16 解答
console.log("演習16 解答");

const message3 = "I have a dream today";
const prefix = "I have";
const partial = "dream";
const backward = "today";

if (message3.startsWith(prefix)) {
  console.log(prefix + "は前方一致しました");
} else {
  console.log(prefix + "は前方一致しませんでした");
}

if (message3.includes(partial)) {
  console.log(partial + "は部分一致しました");
} else {
  console.log(partial + "は部分一致しませんでした");
}

if (message3.endsWith(backward)) {
  console.log(backward + "は後方一致しました");
} else {
  console.log(backward + "は後方一致しませんでした");
}

// 演習17 解答
console.log("演習17 解答");
const message4 = "I have a apple";
const message5 = "I have an apple";
if (message4 === message5) {
  console.log("文字列が同じです");
} else {
  console.log("文字列が同じではありません");
}

// 演習18 解答
console.log("演習18 解答");
const bigNumber =
  "阿僧祇(あそうぎ):那由他(なゆた):不可思議(ふかしぎ):無量大数(むりょうたいすう)";
const units = bigNumber.split(":");

for (const unit of units) {
  console.log(unit);
}
