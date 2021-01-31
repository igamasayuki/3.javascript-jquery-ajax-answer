'use strict';
$(function () {
	// 演習１
	$(document).on('click', '#q1_btn', function () {
		$('#q1').text('山田太郎');
	});

	// 演習２
	$('#q2').css('color', 'blue'); // 初期表示時は青
	$(document).on('click', '#q2_btn', function () {
		let targetText = $('#q2').css('color');
		if (targetText == 'rgb(0, 0, 255)') { // 青なら赤へ、赤なら青へ
			$('#q2').css('color', 'red');
		} else {
			$('#q2').css('color', 'blue');
		}
	});

	// 演習３
	$('#triathlon').hide(); // hide()関数でも非表示になる
	$('#other').hide();

	$(document).on('change', '#q3_select', function () { // 選択肢変更時
		if ($('#q3_select').val() == '1') {
			$('#triathlon').show();
			$('#other').hide();
		} else if ($('#q3_select').val() == '2') {
			$('#triathlon').hide();
			$('#other').show();
		} else {
			$('#triathlon').hide();
			$('#other').hide();
		}
	});

	// 演習４
	$(document).on('click', '#q4_btn', function () { // ボタン押下時
		$('#q4_btn').prop('disabled', true);
	});

	// 演習５
	$(document).on('click', '#q5_btn', function () { // ボタン押下時
		let nameValue = $('#email').val();
		if (nameValue == '') {
			alert('メールアドレスを入力してください！');
		} else {
			// 入力されていたらq5_formというidがつけられたフォームをサブミットする(サーバーへ送る)
			// 今回はaction属性が「#」なので同じ画面が表示される
			$('#q5_form').submit();
		}
	});

});