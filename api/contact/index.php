<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name'])) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendNameEmptyerrorMessage,
		   "fatalError" => false
        ]
    );
    exit();
}

if(empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage,
		   "fatalError" => false
        ]
    );
    exit();
}  else {
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo json_encode(
          [
             "sent" => false,
             "message" => $SendMailInvaliderrorMessage,
		   "fatalError" => false
          ]
      );
      exit();
    }
  }

if( empty($_POST['subject'])) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendSubjectEmptyerrorMessage,
		   "fatalError" => false
        ]
    );
    exit();
}

if( empty($_POST['message']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMessageEmptyerrorMessage,
		   "fatalError" => false
        ]
    );
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'] . ': '  . $_POST['subject'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    if ($sendEmail->send()){
      echo json_encode(
        [
           "sent" => true,
           "message" => $SendMailSuccessMessage,
		   "fatalError" => false
        ]
    );
    } else {
       echo json_encode(
         [
            "sent" => false,
            "message" => $SendMailFailederrorMessage,
		   "fatalError" => true
         ]
     );
    }
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage,
		   "fatalError" => true
     ]
 );
}
