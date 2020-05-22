$(document).ready(function(){

    $("#email-button").on("click", function(event) {
        
        var senderEmail = $("#sendersEmail").val().trim();
        var emailSubject = $("#emailSubject").val().trim();
        var emailBody = $("#emailBody").val().trim();
        var emailStatus = $(".status");
        emailStatus.empty();

        if (senderEmail.length > 5 && senderEmail.includes("@") && senderEmail.includes(".")) {
            moveToSubject();
        } else {
            event.preventDefault();
            emailStatus.append("<p>Invalid email</p>");
        }

        function moveToSubject() {
            if (emailSubject.length < 2) {
                event.preventDefault();
                emailStatus.append("<p>Please add a subject</p>");
            } else {
                moveToBody();
            }
        }

        function moveToBody() {
            if (emailBody < 20){
                event.preventDefault();
                emailBody.append("<p>Body of email is too short</p>")
            } else {
                alert("Email sent successfully. Thank you!")
            }
        }

    })
})