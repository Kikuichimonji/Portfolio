<?php     
    $to_email = 'thomas_roess@hotmail.fr';
    $subject = 'Testing PHP Mail';
    $message = 'This mail is sent using the PHP mail function';
    $headers = 'From: admin@thomas-roess.fr';
    mail($to_email,$subject,$message,$headers);
?>