




function validateForm()
{
	var x = document.forms["contactform"]["name"].value;
	if (x == null || x == "" || x == "Name") {
		alert("First name must be filled out");
		return false;
	}
	else {
		return true;
	}
}
