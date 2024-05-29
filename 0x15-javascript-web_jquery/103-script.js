// 103-script.js

// Ensure the DOM executing the script
$(document).ready(function () {
  // Attach a click event handler 
  $('#btn_translate').click(fetchTranslation);

  // Attach a keypress event handler
  $('#language_code').keypress(function (event) {
    // Check pressed key is ENTER (key code 13)
    if (event.which === 13) {
      fetchTranslation();
    }
  });

  // Function to fetch and display translation
  function fetchTranslation() {
    // Fetch the language code 
    const languageCode = $('#language_code').val();

    // Make a GET request to the specified language code
    $.get(`https://www.fourtonfish.com/hellosalut/hello/${languageCode}`, function (data) {
      // Display the fetched translation in DIV#hello
      $('#hello').text(data.hello);
    });
  }
});
