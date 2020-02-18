imgRotate = 0; // サンプル2で使用グローバル変数(回転角度)
$(function() {
	// サンプル1(現在の日付をテキストボックスに入れる)
	$("#sample1button").on("click", function() { // ボタン押下時
		$("#nowText").val(new Date());
	});

	// サンプル2 (テキストの色の入れ替え＆画像回転)
	$("#blueOrRedText").css("color", "blue"); // 初期表示時は青

	$("#sample2button").on("click", function() { // ボタン押下時
		// 色の入れ替え
		var targetText = $("#blueOrRedText").css("color");
		if (targetText == "rgb(0, 0, 255)") { // 青なら赤へ、赤なら青へ
			$("#blueOrRedText").css("color", "red");
		} else {
			$("#blueOrRedText").css("color", "blue");
		}
		// 画像回転
		imgRotate += 90; // 90度回転
		$("#jsImg").css({
			transform : 'rotate(' + imgRotate + 'deg)'
		})// 画像の角度を変える
	});

	// サンプル3 (HTML要素の表示、非表示を切り替える)
	$("#triathlon").css("display", "none"); // 初期表示時は非表示
	$("#other").css("display", "none");
	// $("#triathlon").hide(); //hide()関数でも非表示になる
	// $("#other").hide();

	$("#sample3select").on("change", function() { // 選択肢変更時
		if ($("#sample3select").val() == "1") {
			$("#triathlon").show();
			$("#other").hide();
		} else if ($("#sample3select").val() == "2") {
			$("#triathlon").hide();
			$("#other").show();
		} else {
			$("#triathlon").hide();
			$("#other").hide();
		}
	});
	
//	$("#sample3select").on("change", function() { // 選択肢変更時
//		if ($("#sample3select").val() == "1") {
//			$("#triathlon").css("display", "block");
//			$("#other").css("display", "none");
//		} else if ($("#sample3select").val() == "2") {
//			$("#triathlon").css("display", "none");
//			$("#other").css("display", "block");
//		} else {
//			$("#triathlon").css("display", "none");
//			$("#other").css("display", "none");
//		}
//	});


	// サンプル4(フォーム送信ボタンを押した時、送信前に入力内容をチェックする)
	$("#sample4Button").on("click", function() { // ボタン押下時
		var nameValue = $("#name").val();
		if (nameValue == "") {
			alert("名前を入力してください！");
		} else {
			// 入力されていたらsample4Formというidがつけられたフォームをサブミットする(サーバーへ送る)
			$("#sample4Form").submit();
		}
	});

	// サンプル5 (ダブルサブミット対策:1度押したら2度目を押せなくする)
	$("#sample5Button").on("click", function() { // ボタン押下時
		$("#sample5Button").prop("disabled", true);
	});

	// サンプル6 (ダミーフォームを作りボタンを横に並べる)
	$("#sample6Button").on("click", function() { // ボタン押下時
		alert("投稿ではなく削除のダミーフォームをサブミット！");
		// sample6Formというidがつけられたフォームをサブミットする(サーバーへ送る)
		$("#sample6FormForDelete").submit();
	});

}); // end ready
