<?php

require "./db.php";

if (isset($_POST["saveMessage"])) {
    $names = $_POST["names"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $saveMessage = $serverConnect->prepare("INSERT INTO messages (names, email, message) VALUES (:names, :email, :message) ");
    $saveMessage->execute([
        "names" => $names,
        "email" => $email,
        "message" => $message
    ]);

    if ($saveMessage) {
       echo "messageSaved";
    }
}