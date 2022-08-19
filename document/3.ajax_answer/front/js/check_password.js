"use strict";
$(function () {
  $("#password").on("keyup", function () {
    check_password();
  });

  $("#confirmationPassword").on("keyup", function () {
    check_password();
  });

  function check_password() {
    let hostUrl = "http://153.127.48.168:8080/ex-js-api/checkpassword/check";
    let inputPassword = $("#password").val();
    let inputConfirmationPassword = $("#confirmationPassword").val();
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
        $("#robustnessMessage").text(data.robustnessMessage);
        $("#disagreementMessage").text(data.disagreementMessage);
      })
      .fail(function (XMLHttpRequest, textStatus, errorThrown) {
        alert("エラーが発生しました！");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
      });
  }
});
