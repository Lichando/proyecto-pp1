<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    $destinatario = "greenhousepruebas@gmail.com";
    
    $asunto = "Mensaje de contacto";
    
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";
    
    $headers = "From: $email";
    
    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "¡Gracias por contactarnos, $nombre! Pronto recibirás una respuesta.";
    } else{
        echo "Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
    }
}
