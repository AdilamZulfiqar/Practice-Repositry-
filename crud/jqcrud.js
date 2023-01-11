$(function () {
  $("#recipies").on("click", ".btn-danger", handleDelete);
  loadRecipies();
});

function handleDelete() {
  var btn = $(this);
  var parentDiv = btn.closest(".recipe");
  let id = parentDiv.attr("data-id");
  console.log(id);

  $.ajax({
    url: "https://usman-cui-recipies.herokuapp.com/api/recipes/" + id,
    method: "DELETE",
    success: function () {
      loadRecipies();
    },
  });
}

function loadRecipies() {
  $.ajax({
    url: "https://usman-cui-recipies.herokuapp.com/api/recipes",
    method: "GET",
    error: function () {
      var recipies = $("#recipies");
      recipies.html("An error has occured");
    },
    success: function (response) {
      console.log(response);
      var recipies = $("#recipies");
      recipies.empty();
      for (var i = 0; i < response.length; i++) {
        var rec = response[i];
        recipies.append(
          `<div class="recipe" data-id="${rec._id}"><h3>${rec.title}</h3><p><button class = "btn btn-warning btn-sm float-end">Edit</button><button class = "btn btn-danger btn-sm float-end">Delete</button>${rec.body}</p></div>`
        );
      }
    },
  });
}
