"use strict";
$(() => {
  // 初期表示時は「入金前:0」&「入金済へ変更」ボタンにする
  $("#nowStatusName").text("入金前");
  $("#update_status_btn").val(0);
  $("#nextStatusName").text("入金済");

  $("#update_status_btn").on("click", () => {
    let hostUrl = "http://153.127.48.168:8080/ex-js-api/updatestatus/update";
    let previousStatusValue = $("#update_status_btn").val();
    $.ajax({
      url: hostUrl,
      type: "POST",
      dataType: "json",
      data: {
        previousStatusValue: previousStatusValue,
      },
      async: true,
      // 非同期で処理を行う
    })
      .done((data) => {
        // コンソールに取得データを表示
        console.log(data);
        console.dir(JSON.stringify(data));
        $("#nowStatusName").text(data.nowStatusName);
        $("#update_status_btn").val(data.nowStatusValue);
        $("#nextStatusName").text(data.nextStatusName);
      })
      .fail((XMLHttpRequest, textStatus, errorThrown) => {
        alert("エラーが発生しました！");
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus     : " + textStatus);
        console.log("errorThrown    : " + errorThrown.message);
      });
  });
});
