$(document).ready(function () {
  const listArray = [];
  $("#register").click("submit", function (event) {
    event.preventDefault();

    const toList = $("#task").val();

    if (toList === "") {
      alert("Campo vazio");
      return;
    }

    if (listArray.includes(toList)) {
      alert("Essa lista já foi adicionada");
      $("#task").val("");
    } else {
      listArray.push(toList);
      const createElement = $(`<li>${toList}</li>`);
      createElement.appendTo("#list").hide().fadeIn(1000);
      $("#task").val("");
    }
  });

  $("#list").on("click", "li", function () {
    $(this).css("text-decoration", "line-through");
  });
});
