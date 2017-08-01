/**
 * Created by Eugen_EVK on 19-Jul-17.
 */
const   $ = require('jquery');
const   jquery_validation = require('jquery-validation');

$(function() {
	$("form[name='register']").validate({
		rules: {
			user: "required",
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				number: true
			}
		},

		messages: {
			user: "Please enter your name",
			email: "Please enter a valid email address",
			phone: "Please enter a valid phone number"
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
});