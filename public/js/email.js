require("dotenv").config()

function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : process.env.EMAIL_USER,
	Password : process.env.EMAIL_PASS,
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}