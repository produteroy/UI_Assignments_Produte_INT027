$(document).ready(function() {
	$("#fname").on("change", function() {
		if (($("#fname").val() == '') || (!$("#fname").val().trim())) {
			alert("First Name Cannot be empty");
			$("#pwd").val("");
			$("#cnfpwd").val("");
			$("#register").attr("disabled", true);
			$("#register").attr("style", "background-color: #DADADA");
		}
	});

	$("#addressP").on("change", function() {
		if (($("#addressP").val() == '') || (!$("#addressP").val().trim())) {
			alert("Permanent address cannot be empty");
			$("#pwd").val("");
			$("#cnfpwd").val("");
			$("#register").attr("disabled", true);
			$("#register").attr("style", "background-color: #DADADA");
		}
	});

	$("#addressC").on("change", function() {
		if (($("#addressC").val() == '') || (!$("#addressC").val().trim())) {
			alert("Current address cannot be empty");
			$("#pwd").val("");
			$("#cnfpwd").val("");
			$("#register").attr("disabled", true);
			$("#register").attr("style", "background-color: #DADADA");
		}
	});


	$("#emailID").on("change", function() {
		var res = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test($("#emailID").val());

		if (res == false) {
			alert("Please enter a valid email id");
			$("#pwd").val("");
			$("#cnfpwd").val("");
			$("#register").attr("disabled", true);
			$("#register").attr("style", "background-color: #DADADA");
		}
	});

	$("#phnumber").on("change", function() {
		var pattern = new RegExp("^[0-9]{10}$");
		var res = pattern.test($("#phnumber").val());

		if (res == false) {
			alert("Only numbers are allowed and it should be of 10 digits");
			$("#pwd").val("");
			$("#cnfpwd").val("");
			$("#register").attr("disabled", true);
			$("#register").attr("style", "background-color: #DADADA");
		}
	});

	$("#pwd").on("change", function() {
		var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		var res = re.test($("#pwd").val());

		if (res == false) {
			alert("Please enter a valid password!");
		}
	});

	$("#cnfpwd").on("keypress", function() {
		var cnfpwdValue = $("#cnfpwd").val();
		var pwdValue = $("#pwd").val();

		if (cnfpwdValue != pwdValue) {

			$("#register").attr("disabled", true);

		} else {
			var registerButton = $("#register");
			registerButton.attr("disabled", false);
			registerButton.attr("style", "background-color:green");

		}
	});

	$("#cnfpwd").on("keyup", function() {
		var cnfpwdValue = $("#cnfpwd").val();
		var pwdValue = $("#pwd").val();

		if (cnfpwdValue != pwdValue) {

			$("#register").attr("disabled", true);

		} else {
			var registerButton = $("#register");
			registerButton.attr("disabled", false);
			registerButton.attr("style", "background-color:green");

		}
	});

	$("#reset_button").on("click", function() {
		$('#fname').val("");
		$('#lname').val("");
		$('#addressP').val("");
		$('#addressC').val("");
		$('#emailID').val("");
		$('#phnumber').val("");
		$('#pwd').val("");
		$('#cnfpwd').val("");
		$('#addresscheck').prop("checked", false);
		$("#addressC").prop('disabled', false);
		$("#register").prop('disabled', true);
		$("#register").attr("style", "background-color:#DADADA");
	});

	$("#addresscheck").on("click", function() {
		if ($('#addresscheck').prop("checked") == true) {
			var n1 = $('#addressP');
			var n2 = $('#addressC');
			n2.val(n1.val());
			$("#addressC").attr("disabled", true);
		} else {
			var n2 = $('#addressC');
			n2.val("");
			$("#addressC").attr("disabled", false);
		}
	});


	$("#register").on("click", function() {

		var ul = $("#dashboardContents");



		var emailValue = $("#emailID").val();
		var fullName = $("#fname").val() + " " + $("#lname").val();

		var li = $("<li></li>", {
			class: "dashboard-li"
		});

		var a = $("<a></a>", {
			class: "dashboard-anchor",
			href: "#"
		}).text(fullName);

		var div = $("<div></div>", {
			class: "email-dashboard"
		}).text(emailValue);



		li.append(a);
		li.append(div);
		ul.append(li);

	});

	$('#pwd').bind("cut copy paste", function(e) {
		e.preventDefault();
	});

	$('#cnfpwd').bind("cut copy paste", function(e) {
		e.preventDefault();
	});


})

document.getElementById('outer-li').onmouseleave = function() {
	document.getElementById('ul-lid').classList.add("hide");
}
document.getElementById('profile-dropdown').onclick = function(e) {
	document.getElementById('ul-lid').classList.toggle("hide");
}