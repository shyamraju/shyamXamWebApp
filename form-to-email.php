<?php
  $name = $_POST['name'];
  $score = $_POST['score'];
$headers = 'From: cs556_a1@shyam.host';
  $to = 'shyam.npu.ta@gmail.com';

      $email_subject = "$name -- Midterm";

      $email_body = "$name   :    $score";

		echo "<html><body><div align='center'>Thank you for taking the Exam $name! <br> Your score is $score<br><h1> SCORE SUBMITTED SUCCESSFULLY!!!</h1><br></body></html>";
  mail($to,$email_subject,$email_body,$headers);

?>
