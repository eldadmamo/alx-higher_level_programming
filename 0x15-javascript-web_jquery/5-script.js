// Adds list when the div#add_item tag is clicked

$('DIV#add_item').click(function () {
    let element = '<li>Item</li>';
    $('ul.my_list').append(element);
  });
