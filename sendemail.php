<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection parameters
$servername = "localhost";
$username = "u507632299_kumkum123"; // Update with your username
$password = "Fepl123@"; // Update with your password
$dbname = "u507632299_feplenggdb"; // Ensure this is correct

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$msg = $_POST['msg'];

// Validate form data
if (empty($firstname) || empty($lastname) || empty($email) || empty($msg)) {
    die("All fields are required.");
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO FEPLcontactus (firstname, lastname, email, msg) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    die("Error preparing statement: " . $conn->error);
}
$stmt->bind_param("ssss", $firstname, $lastname, $email, $msg);

// Execute the query
if ($stmt->execute()) {
    // Send email notification
    $to = "sales@feplengg.co.in"; // Change to your email
    $subject = "New enquiry on FEPLengineering";
    $message = "First Name: $firstname\nLast Name: $lastname\nEmail: $email\nMessage: $msg";
    $headers = "From: info@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


    if (mail($to, $subject, $message, $headers)) {
        echo "<h1><i>Your enquiry is submitted successfully. We will get back to you shortly.</i></h1>";
    } else {
        echo "<h1><i>Form submitted, but there was an error sending the email.</i></h1>";
    }
} else {
    echo "<h1><i>Error: " . htmlspecialchars($stmt->error) . "</i></h1>";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>