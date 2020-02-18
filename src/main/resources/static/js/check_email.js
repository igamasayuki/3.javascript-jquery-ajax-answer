$(function() {
	$("#email").on("keyup", function() {
		var hostUrl = "http://localhost:8080/check_email_api/emailcheck";
		var inputEmail = $("#email").val();
		$.ajax({
			url : hostUrl,
			type : "POST",
			dataType : "json",
			data : {
				email : inputEmail
			},
			async: true // 非同期で処理を行う
		}).done(function(data) {
			// コンソールに取得データを表示
			console.log(data);
			console.dir(JSON.stringify(data));
			$("#duplicateMessage").html(data.duplicateMessage);
		}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
			alert("エラーが発生しました！");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		});
	});
});