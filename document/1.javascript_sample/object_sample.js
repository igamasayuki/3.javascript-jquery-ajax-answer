"use strict";
const human = {
  firstName: "Masayuki",
  lastName: "Iga",
  birthMonth: 7,
  hobbies: ["swim", "bike", "run"], // valueを配列にすることも可能
  sayMyName: function () {
    console.log(`私の名前は${this.firstName}です。`);
  }, // valueを関数にするとメソッドになる
  1: "first", // keyを数字にすることも可能
  誕生月: "7月", // 全角文字をkey値に使用できる。keyは' や " で囲んでも良い。
};

// プロパティへのアクセス
console.log(human["firstName"]); // Masayuki ※keyはダブルorシングルクウォート必須
console.log(human.lastName); // Iga
console.log(human[1]); // first // 数字がkeyの場合
// console.log(human.1); // エラー

// メソッドの呼び出し
human.sayMyName(); // 私の名前はMasayukiです。

// プロパティへの代入
human["firstName"] = "Taro"; // "Masayuki"が"Taro"に上書きされる
human["lastName"] = "Yamada"; // "Iga"が"Yamada"に上書きされる

// メソッドの呼び出し
human.sayMyName(); // 私の名前はTaroです。
