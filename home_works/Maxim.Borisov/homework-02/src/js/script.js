$('#registration').submit(function(e){
  var emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var emailValue = $('#email').val();
  var phoneRegExp = /^\++[0-9]{12}$/;
  var phoneValue = $('#phone').val();
  var error = false;
  var errorMessage = '';

  $('.form-messages').empty();

  /* Validation of "E-mail" field */
  if (emailValue.length === 0) {
    error = true;
    errorMessage = errorMessage + '<span class="form-error">E-mail address is required!</span>';
  } else {
    if (!emailRegExp.test(emailValue)) {
      error = true;
      errorMessage = errorMessage + '<span class="form-error">Please enter valid e-mail!</span>';
    }
  }

  /* Validation of "Phone" field */
  if (phoneValue.length === 0) {
    error = true;
    errorMessage = errorMessage + '<span class="form-error">Phone number is required!</span>';
  } else {
    if (!phoneRegExp.test(phoneValue)) {
      error = true;
      errorMessage = errorMessage + '<span class="form-error">Please enter valid phone number!</span>';
    }
  }

  /* Display errors or data from text fields */
  if (error === true) {
    e.preventDefault();
    $('.form-messages').append(errorMessage);
  } else {
    console.log('E-mail: ' + emailValue + ' | Phone: ' + phoneValue);
    $('.form-field').val('');
  }
});
