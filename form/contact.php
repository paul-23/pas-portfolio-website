<?php
if(isset($_POST['email'])) {

$email_to = "paul.stanescu.cmrm16@gmail.com";
$email_subject = "Contacto desde el sitio web";

if(!isset($_POST['InputName']) ||
!isset($_POST['InputEmail']) ||
!isset($_POST['InputMessage']) ||
!isset($_POST['InputSubject'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['InputName'] . "\n";
$email_message .= "Correo electrónico: " . $_POST['InputEmail'] . "\n";
$email_message .= "Asunto " . $_POST['InputSubject'] . "\n";
$email_message .= "Mensaje: " . $_POST['InputMessage'] . "\n\n";


$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>