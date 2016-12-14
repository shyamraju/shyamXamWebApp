<?php
  $name = $_POST['name'];
  $score = $_POST['score'];
$headers = 'From: cs556_a1@shyam.host';
  $to = 'shyam.npu.ta@gmail.com';

      $email_subject = "$name -- Final";

      $email_body = "$name   :    $score";

		echo "<html><body><div align='center'>Thank you for taking the Exam <font color='red'>$name</font>! <br> Your score is <font color='red'> $score</font><br><h1> SCORE SUBMITTED SUCCESSFULLY!!!</h1><br><br><br> If you do not see your student ID or SCORE in <font color='red'>RED</font> above, you have to take the exam again. <br><br> Please check if your score has been received before leaving the class!</body></html>";
  mail($to,$email_subject,$email_body,$headers);

?>
