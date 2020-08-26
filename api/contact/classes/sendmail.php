<?php
/**
 * @class Sender
 * This is used to send email via react contact from component
 */
class Sender
{
    public $sendTo;
    public $sendFrom;
    public $email;
    public $email_subject;
    public $email_message;
    public $email_headers;
    public $subject;
    public $message;
    public $headers;
    public $error = [];

    public function __construct($sendTo, $sendFrom = null, $subject, $message, $subjectCopy, $name)
    {
        $this->sendTo = $sendTo;
        $this->sendFrom = ($sendFrom) ? $sendFrom : 'keymolenandrew@gmail.com';
        $this->subject = $subject;
        $this->message = $message;
		$this->name = $name;
		$this->subjectCopy = $subjectCopy;
    }

    public function setTo($email, $name) {
        return $this->sendTo = $email;
    }

    public function getTo() {
        return $this->sendTo;
    }

    public function setFrom($email, $name)  {
        return $this->sendFrom = $email;
    }

    public function setSubject($subject) {
        return $this->subject = $subject;
    }

    public function getSubject() {
        return $this->subject;
    }

    public function setMessage($message) {
        $this->message = $message;
        return $this;
    }

    public function getMessage() {
        return $this->message;
    }

    public function setHeader() {
        $headers = 'From: '.$this->getFrom() . "\r\n" .
            'Reply-To: '.$this->getFrom() . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        $this->headers = $headers;
        return $this;
    }

    public function getFrom() {
        return $this->sendFrom;
    }

    public function send() {
		
		//Mail to admin
        $to = $this->sendTo;
        $from = $this->sendFrom;
        $subject = $this->subject;
        $message = $this->message;
        //$headers = $this->headers;
        $headers = 'From: '.$this->getFrom() . "\r\n" .
            'Reply-To: '.$this->getFrom() . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($to, $subject, $message, $headers);
		
		//Copy to sender
		$email = $this->sendFrom;
		$name = $this->name;
		$subjectCopy = $this->subjectCopy; 
		$email_subject = "Submission was successful";
		$email_message = "\nThank you for contacting me, I'll reply to you asap!\n\n\n";
		$email_message .= "Here's what you sent me:\n\n";
		$email_message .= "- Name: ".$name."\n\n";
		$email_message .= "- Email: ".$email."\n\n";
		$email_message .= "- Subject: ".$subjectCopy."\n\n";
		$email_message .= "- Message: \n\n".$message."\n\n";
		// create email headers
		$email_headers = 'From: '.$to."\r\n".
			'Reply-To: '.$to."\r\n" .
			"MIME-Version: 1.0\r\n" .
			"Content-Type: text/plain; charset=iso-8859-1\r\n";
		mail($email, $email_subject, $email_message, $email_headers);
    }
}
