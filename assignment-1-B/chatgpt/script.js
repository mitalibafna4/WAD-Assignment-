// script.js
$(document).ready(function() {
  $('#registrationForm').submit(function(e) {
    e.preventDefault();

    // Get the user input values
    var name = $('#name').val();
    var email = $('#email').val();

    // Create an object with the user data
    var userData = {
      name: name,
      email: email
    };

    // Store the data in the local storage
    var registrations = localStorage.getItem('registrations');
    if (registrations) {
      registrations = JSON.parse(registrations);
    } else {
      registrations = [];
    }
    registrations.push(userData);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    // Reset the form
    $('#registrationForm')[0].reset();

    // Display the registered data in the form
    $('#name').val(userData.name);
    $('#email').val(userData.email);
  });
});
