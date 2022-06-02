// 演習2 解答
console.log("演習2 解答");
console.log("伊賀将之");

// 演習3 解答
console.log("演習3 解答");
let lastName = "伊賀";
let firstName = "将之";
console.log(lastName);
console.log(firstName);

// 演習4 解答
console.log("演習4 解答");
let myAge = 18;
if (myAge < 20) {
  console.log("未成年です");
} else {
  console.log("成人です");
}

// 演習4-2 解答
console.log("演習4-2 解答");
let age = 4;
if (0 <= age && age <= 4) {
  console.log("幼年期");
} else if (5 <= age && age <= 14) {
  console.log("少年期");
} else if (15 <= age && age <= 24) {
  console.log("青年期");
} else if (25 <= age && age <= 44) {
  console.log("壮年期");
} else if (45 <= age && age <= 64) {
  console.log("中年期");
} else if (65 <= age) {
  console.log("高年期");
}

// 演習5 解答
console.log("演習5 解答");
let answer = 0;
for (let i = 1; i <= 10; i++) {
  answer += i;
}
console.log(answer);

// 演習5-2 解答
console.log("演習5-2 解答");
let answerLine = "";
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let answer = i * j;
    if (answer < 10) {
      answer = " " + answer;
    }
    answerLine += answer + " ";
    //process.stdout.write(i + j); // ←調べるとこれが出てきますがこれはnode.jsというライブラリ使用しないと使えないためNG
  }
  answerLine += "\n"; // 改行
}
console.log(answerLine);

// 演習6 解答
console.log("演習6 解答");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for文
let answer2 = 0;
for (let i = 0; i < 10; i++) {
  answer2 += array[i];
}
console.log("for文のanswer:" + answer2);
// for-of文
let answer3 = 0;
for (let number of array) {
  answer3 += number;
}
console.log("for-of文のanswer:" + answer3);

// 演習6-2 解答
console.log("演習6-2 解答");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for文
for (let i = 0; i < 10; i++) {
  let number = array2[i];
  if (number % 2 === 1) {
    console.log(number);
  }
}
// for-of文
for (let number of array2) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

// 演習7 解答
console.log("演習7 解答");
let capitalInfo = {
  日本: "東京",
  スリランカ: "スリジャヤワルダナプラコッテ",
  タイ: "クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラアユッタヤー・マハーディロッカポップ・ノッパラッターナラーチャタニーブリーロム・ウドンラーチャニウェットマハーサターン・アモーンラピーンアワターンサティット・サッカタットティヤウィサヌカムプラシット",
};
console.log("日本の首都は" + capitalInfo["日本"] + "です");
console.log("タイの首都は" + capitalInfo["タイ"] + "です");
capitalInfo["タイ"] = "バンコク";
console.log("タイの首都は" + capitalInfo["タイ"] + "です");
