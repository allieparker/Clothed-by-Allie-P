
//submit form//
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

//photo slide//




function validateForm() {
  const userEmail =getElementById('userEmail');

  const userEmail =getElementById('userEmail').value;

if (userEmail.includes('@') && userEmail.length > 5) {
  return true 
} else {
  alert ('invaild email')
  return false
  }
}
