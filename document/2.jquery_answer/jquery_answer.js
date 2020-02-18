$(function() {
	// 問１
	$("#q1_btn").on("click", function(){
		$("#q1").text("山田太郎");
	});
	
	// 問２
	$("#q2").css("color", "blue"); // 初期表示時は青
	$("#q2_btn").on("click", function(){
		var targetText = $("#q2").css("color");
		if (targetText == "rgb(0, 0, 255)") { // 青なら赤へ、赤なら青へ
			$("#q2").css("color", "red");
		} else {
			$("#q2").css("color", "blue");
		}
	});
	
	// 問３
	$("#triathlon").hide(); //hide()関数でも非表示になる
	$("#other").hide();

	$("#q3_select").on("change", function() { // 選択肢変更時
		if ($("#q3_select").val() == "1") {
			$("#triathlon").show();
			$("#other").hide();
		} else if ($("#q3_select").val() == "2") {
			$("#triathlon").hide();
			$("#other").show();
		} else {
			$("#triathlon").hide();
			$("#other").hide();
		}
	});
	
	// 問４
	$("#q4_btn").on("click", function() { // ボタン押下時
		$("#q4_btn").prop("disabled", true);
	});
	
	// 問５
	$("#q5_btn").on("click", function() { // ボタン押下時
		var nameValue = $("#email").val();
		if (nameValue == "") {
			alert("メールアドレスを入力してください！");
		} else {
			// 入力されていたらq5_formというidがつけられたフォームをサブミットする(サーバーへ送る)
			// 今回はaction属性が「#」なので同じ画面が表示される
			$("#q5_form").submit();
		}
	});

});