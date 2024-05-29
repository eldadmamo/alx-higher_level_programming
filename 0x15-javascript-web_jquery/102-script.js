// 102-script.js

// Ensure the DOM executing the script
$(document).ready(function () {
  // Attach a click event handl
  $('#btn_translate').click(function () {
    // Fetch the language 
    const languageCode = $('#language_code').val();

    // Make a GET request to the API
    $.get(`https://www.fourtonfish.com/hellosalut/hello/${languageCode}`, function (data) {
      // Display translation in DIV#hello
      $('#hello').text(data.hello);
    });
  });
});
