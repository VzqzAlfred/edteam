<?php
    if(isset($_POST)){
        error_reporting(0);

        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $comments = $_POST["comments"];
        
        $domain = $_SERVER["HTTP_HOST"];
        $to = "alfredvzqz239@gmail.com";
        $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
        $message = "
            <p>
                Datos enviados desde el formulario del sitio <b>$domain</b>
            </p>
            <ul>
                <li>Nombre: <b>$name</b></li>
                <li>Email: <b>$email</b></li>
                <li>Subject: $subject</li>
                <li>Comentarios: $comments</li>
            </ul>
        ";
        $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío Automático No Responder <no-reply@$domain>";

        $send_mail = mail($to, $subject_mail, $message, $headers);

        if($send_mail){
            $res = [
                "error" => false,
                "message" => "Tus datos han sido enviados."
            ];
        } else {
            $res = [
                "error" => true,
                "message" => "Error al enviar tus datos, intenta nuevamente."
            ];
        }

        // * permite tener accesos de todos los dominios
        header("Access-Control-Allow-Origin: *");
        //header("Access-Control-Allow-Origin: https://Alfredvzqz.com");
        header("Content-Type: application/json");
        echo json_encode($res);
        exit;
    }