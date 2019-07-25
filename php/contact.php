<?php
	use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    // Load Composer's autoloader
    require 'vendor/autoload.php';

	$messageSent = false;
	$errorMessage = "Something went wrong";


	if(!empty($_POST["firstname"]) && !empty($_POST["lastname"]) && !empty($_POST["address"]) && !empty($_POST["message"]))
	{
		$firstname = strip_tags($_POST["firstname"]);
		$lastname = strip_tags($_POST["lastname"]);

		$address = strip_tags($_POST["address"]);
		$message = strip_tags($_POST["message"]);

		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try
		{
			//Server settings
			$mail->SMTPDebug = 0;                                       
			$mail->isSMTP();                                            // Set mailer to use SMTP
			$mail->Host       = 'mail.loveyour.site';                   // Specify main and backup SMTP servers
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'no-reply@loveyour.site';                     // SMTP username
			$mail->Password   = 'OM&7-Ot=R)I3';                               // SMTP password
			$mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
			$mail->Port       = 465;                                    // TCP port to connect to
                
			$mail->setFrom('no-reply@loveyour.site', 'LoveYourSite');
			$mail->addAddress($address, $firstname . ' ' . $lastname);
			$mail->AddBCC("contact@loveyour.site", "LoveYourSite");
			$mail->AddBCC("zach@loveyour.site", "Zach Nelson");
                
			$mail->isHTML(true);
			$mail->Subject = 'You have contacted Love Your Site';
			
			
			$mail->Body    = 
			"Hello " . $firstname . "<br><br>" . 
			"You have successfully sent a message to Love Your Site via the contact form on <a href='loveyour.site'>www.loveyour.site</a>.<br><br>" .
			"<b>Message details:</b><br>" .
			$firstname . " " . $lastname . "<br>" .
			$address . "<br>" .
			$message . "<br><br>" .
			"We will try to get back to you as soon as possible. If you have any questions or concerns, feel free to contact us at (425) 591-9945.<br>We look forward to speaking with you!<br><br>".
			"Sincerely,<br>Your friends at Love Your Site";
			
			
			$mail->AltBody = 
			"Hello " . $firstname . "\n\n" . 
			"You have successfully sent a message to Love Your Site via the contact form on www.loveyour.site.\n\n" .
			"Message details:\n\n" .
			$firstname . " " . $lastname . "\n" .
			$address . "\n" .
			$message . "\n\n" .
			"We will try to get back to you as soon as possible. If you have any questions or concerns, feel free to contact us at (425) 591-9945.\nWe look forward to speaking with you!\n\n".
			"Sincerely,\nYour friends at Love Your Site";

			$mail->send();
			$messageSent = true;
			$errorMessage = "Message has been successfully sent";
			//echo 'Message has been sent';
		}
		catch (Exception $e)
		{
			//echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
			$errorMessage = "Message was unable to send, please try to contact us manually";
		}
	}
	else 
	{
		$errorMessage = "You must fill in all fields to submit";
	}
	
	//return to main page
	$gotoLocation = "Location: ../index.html";

	if($messageSent == true)
	{
		$gotoLocation .= "?sent=1";
	}
	else 
	{
		$gotoLocation .= "?sent=2";
	}
	
	$anchor = $_POST["pageLocation"];
	$gotoLocation .= $anchor;

	header($gotoLocation);
?>