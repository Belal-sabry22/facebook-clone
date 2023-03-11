function openCreateNewAccountPage(){
    var signUpPage = document.getElementById("signUpPage").style;
    signUpPage.display ="block";
}
function closeCreateNewAccountPage(){
    var signUpPage = document.getElementById("signUpPage").style;
    signUpPage.display ="none";
}
function formValidate(){
    var firstNameValue = document.getElementById("firstName").value;
    var lastNameValue = document.getElementById("lastName").value;
    var emailValue = document.getElementById("email").value;
    var newPasswordValue = document.getElementById("newPassword").value;
    var errorFirstNameStyle = document.getElementById("errorFirstName").style;
    var errorLastNameStyle = document.getElementById("errorLastName").style;
    var errorEmailStyle = document.getElementById("errorEmail").style;
    var error = document.getElementById("error");
    var text ='';
    var lengthRegex = /.{8,}/; // at least 8 characters long
    var uppercaseRegex = /[A-Z]/; // contains at least one uppercase letter
    var lowercaseRegex = /[a-z]/; // contains at least one lowercase letter
    var numberRegex = /\d/; // contains at least one number
    var passwordError = document.getElementById("passwordError");
    var day = document.getElementsByName("Day")[0].value;
    var month = document.getElementsByName("Month")[0].value;
    var year = document.getElementsByName("Year")[0].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    if(firstNameValue.length < 3  ) {
        text = "Please enter valid first name"
        errorFirstNameStyle.display = "block";
        error.innerHTML = text ;
    return false;
}
    else if(lastNameValue.length < 3  && lastNameValue==="") {
        text = "Please enter valid last name"
        errorFirstNameStyle.display = "none";
        errorLastNameStyle.display = "block";
        error.innerHTML = text ;
    return false;
}
    else if( emailValue.indexOf("@") == -1) {
        errorLastNameStyle.display = "none";
        text = "Please enter valid email";
        errorEmailStyle.display = "block";
        error.innerHTML = text ;
        return false;
}
    else if (lengthRegex.test(newPasswordValue) && uppercaseRegex.test(newPasswordValue) && lowercaseRegex.test(newPasswordValue) && numberRegex.test(newPasswordValue)) {
        if (day == "" || month == "" || year == "" || gender == null) {
            passwordError.innerHTML = null ;
            error.innerHTML = "Please select a gender";
            return false;
    } 
        return true;
    } else {
        // Password is invalid, show error message
        error.innerHTML = null ;
        errorEmailStyle.display = "none";
        text = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number. ";
        passwordError.innerHTML = text ;
        return false;
}
}

