document.getElementById('outer-li').onmouseleave = function() {
	document.getElementById('ul-lid').classList.add("hide");
}
document.getElementById('profile-dropdown').onclick = function(e) {
	document.getElementById('ul-lid').classList.toggle("hide");
}



document.getElementById("addresscheck").onclick = function copy_Permanent_Address() {

	if (document.getElementById('addresscheck').checked == true) {
		var n1 = document.getElementById('addressP');
		var n2 = document.getElementById('addressC');
		n2.value = n1.value;
		document.getElementById("addressC").disabled = true;
	} else {
		var n2 = document.getElementById('addressC');
		n2.value = "";
		document.getElementById("addressC").disabled = false;
	}

}

document.getElementById("fname").onchange = function isEmptyFirstName() {
	if ((document.getElementById("fname").value == "") || (!document.getElementById("fname").value.replace(/\s/g, '').length)) {
		alert("First name cannot be empty");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}

}

document.getElementById("lname").onclick = function isEmptyFirstName() {
	if ((document.getElementById("fname").value == "") || (!document.getElementById("fname").value.replace(/\s/g, '').length)) {
		alert("First name cannot be empty");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}

}

document.getElementById("addressP").onchange = function isEmptyAddressP() {
	if ((document.getElementById("addressP").value == "") || (!document.getElementById("addressP").value.replace(/\s/g, '').length)) {
		alert("Permanent Address cannot be empty");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}
}

document.getElementById("addressC").onchange = function isEmptyAddressC() {
	if ((document.getElementById("addressC").value == "") || (!document.getElementById("addressC").value.replace(/\s/g, '').length)) {
		alert("Current address cannot be empty");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}
}

document.getElementById("emailID").onchange = function validateEmail() {

	var res = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(document.getElementById("emailID").value);

	if (res == false) {
		alert("Invalid Email ! Please check the email you have entered !");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}
}

document.getElementById("phnumber").onchange = function validatePhNumber() {
	var pattern = new RegExp("^[0-9]{10}$");
	var res = pattern.test(document.getElementById("phnumber").value);

	if (res == false) {
		alert("Only numbers are allowed and it should be of 10 digits");
		document.getElementById("pwd").value = "";
		document.getElementById("cnfpwd").value = "";
		document.getElementById("register").disabled = true;
		document.getElementById("register").setAttribute("style", "background-color: #DADADA");

	}
}



document.getElementById("register").onclick = function addToDashBoard() {

	var ul = document.getElementById("dashboardContents");
	var li = document.createElement("li");
	var a = document.createElement("a");
	var div = document.createElement("div");

	var emailValue = document.getElementById("emailID").value;
	var fullName = document.createTextNode(document.getElementById("fname").value + " " + document.getElementById("lname").value);
	var emailDisplay = document.createTextNode(emailValue);

	a.setAttribute("href", "#");
	a.setAttribute("class", "dashboard-anchor");
	a.appendChild(fullName);

	div.setAttribute("class", "email-dashboard");
	div.appendChild(emailDisplay);

	li.setAttribute("class", "dashboard-li");

	li.appendChild(a);
	li.appendChild(div);
	ul.appendChild(li);

}

document.getElementById("pwd").onchange = function checkPassword() {
	var str = document.getElementById("pwd").value;
	//var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	var res = re.test(str);
	if (res == false) {
		alert("Please enter a valid password!");

	}
}

document.getElementById("cnfpwd").onkeypress = function checkcnfpwd() {
	var cnfpwdValue = document.getElementById("cnfpwd").value;
	var pwdValue = document.getElementById("pwd").value;

	if (cnfpwdValue != pwdValue) {

		document.getElementById("register").disabled = true;

	} else {
		var registerButton = document.getElementById("register");
		registerButton.disabled = false;
		registerButton.setAttribute("style", "background-color:green");

	}
}

document.getElementById("cnfpwd").onkeyup = function checkcnfpwd() {
	var cnfpwdValue = document.getElementById("cnfpwd").value;
	var pwdValue = document.getElementById("pwd").value;

	if (cnfpwdValue != pwdValue) {

		document.getElementById("register").disabled = true;

	} else {
		var registerButton = document.getElementById("register");
		registerButton.disabled = false;
		registerButton.setAttribute("style", "background-color:green");

	}
}



document.getElementById("reset_button").onclick = function clearData() {
	document.getElementById('fname').value = '';
	document.getElementById('lname').value = '';
	document.getElementById('addressP').value = '';
	document.getElementById('addressC').value = '';
	document.getElementById('emailID').value = '';
	document.getElementById('phnumber').value = '';
	document.getElementById('pwd').value = '';
	document.getElementById('cnfpwd').value = '';
	document.getElementById('addresscheck').checked = false;
	document.getElementById("addressC").disabled = false;
	document.getElementById("register").disabled = true;
	document.getElementById("register").setAttribute("style", "background-color: #DADADA");

}