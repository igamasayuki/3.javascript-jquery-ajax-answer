//'use strict';

//未定義の変数に対する代入
count = 1; // 非Scriptモード：複数ページから使用できるグローバル変数
　　　　　　 // Strictモード ：宣言していないためエラー

// 関数引数の重複
console.log(sum(4,8)); // 8 + 8の結果である16が表示される

function sum(a, a) {
	  return a + a; // 非Scriptモード：aには第２引数で渡した8が入る
                    // Strictモード：引数名が重複しているのでエラー
}