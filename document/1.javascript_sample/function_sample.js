"use strict;";

// ====================
// (1)関数宣言
// ====================
console.log(addStatement(1, 2)); // 3と出力(宣言より前で呼出し→巻き上げするという)

function addStatement(x, y) {
  return x + y;
}

console.log(addStatement(1, 2)); // 3と出力 (宣言の後で呼出し)

// ====================
// (2)関数式
// ====================
// console.log(addStatement2(3,4)); 宣言よりも前で呼び出すとエラー

let addStatement2 = function (x, y) {
  return x + y;
};

console.log(addStatement2(3, 4)); // 7と出力 (宣言の後で呼出し)

// ====================
// (3)アロー関数式
// ====================
// console.log(addStatement3(5,6)); 宣言よりも前で呼び出すとエラー

let addStatement3 = (x, y) => {
  return x + y;
};

console.log(addStatement3(5, 6)); // 11と出力 (宣言の後で呼出し)

// ====================
// (4)アロー関数式の省略記法(処理が1行の場合returnも省略可能)
// ====================
// console.log(addStatement4(7,8)); 宣言よりも前で呼び出すとエラー

let addStatement4 = (x, y) => x + y;

console.log(addStatement4(7, 8)); // 15と出力 (宣言の後で呼出し)

// ====================
// (5)デフォルト引数
// ====================
// JavaScriptの関数の振る舞い
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(3, 5)); // 8
console.log(addition(3)); // NaN ←非数 (Not-A-Numberの略で数値が解釈できないことを表す)と表示される(実行時エラーにならない)

// デフォルト引数(関数宣言)
function addition2(num1, num2 = 2) {
  return num1 + num2;
}

console.log(addition2(3, 5)); // 8
console.log(addition2(3)); // 3 + 2 → 5が表示される

// デフォルト引数(アロー関数)
const addition3 = (num1, num2 = 2) => num1 + num2;
console.log(addition3(3, 5)); // 8
console.log(addition3(3)); // 3 + 2 → 5が表示される

// ====================
// (6)残余引数
// ====================
// 残余引数(関数宣言)
function calcTotal(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(calcTotal(100, 200, 300)); // 600

console.log(calcTotal(100, 200, 300, 400)); // 1000

// 残余引数(アロー関数)
const calcTotal2 = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(calcTotal2(100, 200, 300)); // 600

console.log(calcTotal2(100, 200, 300, 400)); // 1000
