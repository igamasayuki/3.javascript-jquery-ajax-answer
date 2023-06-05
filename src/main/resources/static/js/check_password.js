"use strict";
$(function () {
  $("#password").on("keyup", function () {
    check_password();
  });

  $("#confirmationPassword").on("keyup", function () {
    check_password();
  });

  function check_password() {
    const hostUrl = "http://localhost:8080/ex-js-api/checkpassword/check"; // サーバーに上げるときはホスト名をサーバーのIPアドレスに変更する
    const inputPassword = $("#password").val();
    const inputConfirmationPassword = $("#confirmationPassword").val();
    $.ajax({
      url: hostUrl,
      type: "POST",
      dataType: "json",
      data: {
        password: inputPassword,
        confirmationPassword: inputConfirmationPassword,
      },
      async: true,
      // 非同期で処理を行う
    })
      .done(function (data) {
        // コンソールに取得データを表示
        console.log(data);
        console.dir(JSON.stringify(data));
        $("#robustnessMessage").html(data.robustnessMessage);
        $("#disagreementMessage").html(data.disagreementMessage);
      })
      .fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert("エラーが発生しました！");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
      });
  }
});
