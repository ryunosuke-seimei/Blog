window.onload = function(){
  $("#button").on('click', function(event) {
    parent_append_sample();
  });

}

function parent_append_sample(){
  let length = parseInt(($(".parent").children()).length) + 1;
  let li = $("<li></li>").html(length);

  let parent = $(".parent");

  // 後ろに挿入
  // parent.append(li);

  // 先頭に挿入
  parent.prepend(li)
}
