<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize the first name input
    $firstName = test_input($_POST["firstName"]);
    // Retrieve and sanitize the last name input
    $lastName = test_input($_POST["lastName"]);
    // Retrieve and sanitize the message input
    $message = test_input($_POST["message"]);

    // Email configuration
    // Set the recipient email address
    $to = "muhammadumairkhan945@gamil.com";
    // Set the email subject
    $subject = "Message from portfolio";
    // Compose the email body with the form data
    $body = "First Name: $firstName\nLast Name: $lastName\nMessage:\n$message";

    // Send email
    // Use the mail function to send the email
    if (mail($to, $subject, $body)) {
        // If the email is sent successfully, display a success message
        echo "Thank you for your message. We'll get back to you soon!";
    } else {
        // If there's an error sending the email, display an error message
        echo "Oops! Something went wrong. Please try again later.";
    }
}

// Function to sanitize input data
function test_input($data) {
    // Remove leading and trailing whitespace
    $data = trim($data);
    // Remove backslashes from the input
    $data = stripslashes($data);
    // Convert special characters to HTML entities
    $data = htmlspecialchars($data);
    // Return the sanitized data
    return $data;
}
?>
