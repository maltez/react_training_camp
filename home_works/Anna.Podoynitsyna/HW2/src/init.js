const css = require('./styles.css');

var $ = require('jquery');
var jquery_validation = require('jquery-validation');

$( "#userForm" ).validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        phone: {
			required: true,
            number: true
		}
	},
	submitHandler: function(form) {
    console.log( "Handler for .submit() called." );
    //form.submit();
  }
});







