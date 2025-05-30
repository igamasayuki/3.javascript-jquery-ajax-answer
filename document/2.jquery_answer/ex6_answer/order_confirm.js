"use strict";

$(() => {
  $("#address").on("click", () => {
    AjaxZip3.zip2addr("zip11", "", "addr11", "addr11");
  });
});
