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
console.log("5 + 3 = " + add(5, 3));
console.log("5 - 3 = " + sub(5, 3));
console.log("5 * 3 = " + multi(5, 3));
console.log("5 / 3 = " + div(5, 3));

// 演習9 解答
console.log("演習9 解答");
// printNameVariable(); //関数宣言の前だと使用不可能(巻き上げできないという)
let printNameVariable = function () {
  console.log("イガ");
};
printNameVariable();

// 演習9-2 解答
console.log("演習9-2 解答");
let addVariable = function (num1, num2) {
  return num1 + num2;
};
let subVariable = function (num1, num2) {
  return num1 - num2;
};
let multiVariable = function (num1, num2) {
  return num1 * num2;
};
let divVariable = function (num1, num2) {
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
