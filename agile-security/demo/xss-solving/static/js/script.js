$("#btn").bind('click', function() {
  var content = $("#text").val();
  var item = "<li>" + content + "</li>";
  $("#list").append(item);
  $("#text").val('');
});
