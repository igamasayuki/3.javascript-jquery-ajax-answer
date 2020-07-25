'use strict';

// サンプル1(現在の日付をテキストボックスに入れる)
function sample1() {
	document.sample1Form.nowText.value = new Date();
}

// サンプル2(cssを動的に変える:テキストの色の入れ替え＆画像回転)
let imgRotate = 0; // グローバル変数(回転角度)
function sample2() {
	// 色の入れ替え
	let targetText = document.getElementById("blueOrRedText"); // 対象要素をIDで指定
	if (targetText.style.color == "blue") {
		targetText.style.color = "red";
	} else {
		targetText.style.color = "blue";
	}
	// 画像回転
	let targetImg = document.getElementById("jsImg"); // 対象要素をIDで指定
	imgRotate += 90; // 90度回転
	targetImg.style.transform = "rotate(" + imgRotate + "deg)"; // 画像の角度を変える
}

// サンプル3(HTML要素の表示、非表示を切り替える)
function sample3(target) {
	let triathlonDiv = document.getElementById("triathlon"); // 対象要素をIDで指定
	let otherDiv = document.getElementById("other"); // 対象要素をIDで指定
	if (target.value == "1") {
		triathlonDiv.style.display = "block";
		otherDiv.style.display = "none";
	} else if (target.value == "2") {
		triathlonDiv.style.display = "none";
		otherDiv.style.display = "block";
	} else {
		triathlonDiv.style.display = "none";
		otherDiv.style.display = "none";
	}
}

// サンプル4(フォーム送信ボタンを押した時、送信前に入力内容をチェックする)
function sample4() {
	let nameValue = document.sample4Form.name.value;
	if (nameValue == "") {
		alert("名前を入力してください！");
	} else {
		// 入力されていたらsample4Formという名前がつけられたフォームをサブミットする(サーバーへ送る)
		document.sample4Form.submit();
	}
}

// サンプル5(ダブルサブミット対策:1度押したら2度目を押せなくする)
function sample5(buttonObj) {
	buttonObj.disabled = "disabled";
}

// サンプル6(ダミーフォームを作りボタンを横に並べる)
function sample6() {
	alert("投稿ではなく削除のダミーフォームをサブミット！");
	// sample6Formという名前がつけられたフォームをサブミットする(サーバーへ送る)
	document.sample6Form.submit();
}
