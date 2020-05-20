require("dotenv").config()

function sendEmail() {

    var senderEmail = $("#sendersEmail").val().trim();
    var emailSubject = $("#emailSubject").val().trim();
    var emailBody = $("#emailBody").val().trim();

	Email.send({
	Host: "smtp.gmail.com",
	Username : senderEmail,
	Password : process.env.EMAIL_PASS,
	To : process.env.EMAIL_USER,
	From : senderEmail,
	Subject : emailSubject,
	Body : emailBody,
	}).then(
		message => alert("mail sent successfully")
	);
}