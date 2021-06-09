// ====================
// (1)関数宣言
// ====================
console.log(addStatement(1,2)); // 3と出力(宣言より前で呼出し→巻き上げするという)

function addStatement(x,y){
  return x + y;
}

console.log(addStatement(1,2)); // 3と出力 (宣言の後で呼出し)

// ====================
// (2)関数式
// ====================
// console.log(addStatement2(3,4)); 宣言よりも前で呼び出すとエラー

let addStatement2 = function(x,y){
  return x + y;
}

console.log(addStatement2(3,4)); // 7と出力 (宣言の後で呼出し)

// ====================
// (3)アロー関数式
// ====================
// console.log(addStatement3(5,6)); 宣言よりも前で呼び出すとエラー

let addStatement3 = (x,y) => {
  return x + y;
}

console.log(addStatement3(5,6)); // 11と出力 (宣言の後で呼出し)

// ====================
// (4)アロー関数式の省略記法(処理が1行の場合returnも省略可能)
// ====================
// console.log(addStatement4(7,8)); 宣言よりも前で呼び出すとエラー

let addStatement4 = (x,y) => x + y;

console.log(addStatement4(7,8)); // 15と出力 (宣言の後で呼出し)