<?php
$body = file_get_contents('php://input');

if(!$body) {
  die();
}

header('Content-type: application/json');

$form = json_decode($body);

$fromName = htmlspecialchars($form->userName);
$fromEmail = htmlspecialchars($form->email);
$message = htmlspecialchars($form->msg);

if(strlen($fromName) > 0 !== false & strlen($fromEmail) > 0 !== false) {
  $emailBody = '
            <h2>Zpráva z webu culturea.cz</h2>
            <p><strong>od: '.$fromName.'</strong></p>
            <p><strong>email: '.$fromEmail.'</strong></p>
            <p><strong>zpráva: </strong></p>
            <p>'.$message.'</p>
          ';
  
  $to = 'ahoj@culturea.cz';
  $subject = 'Zpráva z webu culturea.cz';
  $content = "text/html; charset=utf-8";
  $mime = "1.0";

  $headers = array();
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=iso-8859';
  $headers[] = 'X-Mailer: PHP/'. phpversion();
  
  
  if(mail($to, $subject, $emailBody, implode(PHP_EOL, $headers))) {
    $alert = [
      'status'  => true,
      'message' => 'mail byl úspěšně odeslán',
    ];
    echo json_encode($alert);
  } else {
    echo 'Oops, něco se pokazilo';
  }

} else {
  $alert = [
    'status'  => false,
    'message' => 'vyplňte všechny pole',
  ];
}
?>