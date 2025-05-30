"use strict";
$(() => {
  $("#email").on("keyup", () => {
    let hostUrl = "http://153.127.48.168:8080/ex-js-api/checkemail/check";
    let inputEmail = $("#email").val();
    $.ajax({
      url: hostUrl,
      type: "POST",
      dataType: "json",
      data: {
        email: inputEmail,
      },
      async: true,
      // 非同期で処理を行う
    })
      .done((data) => {
        // コンソールに取得データを表示
        console.log(data);
        console.dir(JSON.stringify(data));
        $("#duplicateMessage").text(data.duplicateMessage);
      })
      .fail((XMLHttpRequest, textStatus, errorThrown) => {
        alert("エラーが発生しました！");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
      });
  });
});
