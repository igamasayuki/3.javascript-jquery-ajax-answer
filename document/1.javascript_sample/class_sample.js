"use strict";

class Car {
  // コンストラクター
  constructor(speed, name) {
    this.speed = speed;
    this.name = name;
  }

  // メソッド
  stepOnAccele() {
    this.speed += 10;
    console.log("スピードが" + this.speed + "になりました");
  }
}

const estima = new Car(100, "エスティマ");

console.log(estima.speed); // 100
console.log(estima.name); // エスティマ

estima.stepOnAccele(); // スピードが110になりました

// カプセル化の例
// class Car {
//   #speed;
//   #name;

//   // コンストラクター
//   constructor(speed, name) {
//     this.#speed = speed;
//     this.#name = name;
//   }

//   // メソッド
//   stepOnAccele() {
//     this.#speed += 10;
//     console.log("スピードが" + this.#speed + "になりました");
//   }

//   get speed() {
//     return this.#speed;
//   }

//   set speed(speed) {
//     this.#speed = speed;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(name) {
//     this.#name = name;
//   }
// }

// const estima = new Car(100, "エスティマ");

// console.log(estima.speed);
// console.log(estima.name);

// estima.stepOnAccele();
