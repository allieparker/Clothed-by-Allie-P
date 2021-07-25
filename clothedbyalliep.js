
//    ***CLASS REQUIRMENT OF javascript form returning 'Thank you'***
function validateForm()
{
	var userInfo = document.forms["contactform"]["email"].value;

	if (userInfo == null || userInfo == "" || userInfo == "Email") {
		alert("Please complete the form");
		return false;
	}

	else {
		alert("Thank you!");
		return true;
		
	}

}
