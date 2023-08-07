<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Проверяем, заполнены ли все обязательные поля
    if (isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["description"]) && isset($_POST["agreement"])) {
        $name = $_POST["name"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $description = $_POST["description"];
        $agreement = $_POST["agreement"];

        // Создаем объект PHPMailer
        $mail = new PHPMailer();

        // Настройки SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru'; // Замените на адрес SMTP-сервера
        $mail->SMTPAuth = true;
        $mail->Username = 'Tonioj777@yandex.ru'; // Замените на ваше имя пользователя SMTP
        $mail->Password = '18781991GIGGSmu'; // Замените на ваш пароль SMTP
        $mail->SMTPSecure = 'ssl'; // Используйте 'tls' или 'ssl', в зависимости от настроек сервера
        $mail->Port = 465; // Порт SMTP

        // Отправитель и получатель
        $mail->setFrom($email, $name);
        $mail->addAddress('Tonioj777@yandex.ru'); // Замените на адрес получателя

        // Тема и содержимое письма
        $mail->Subject = "Новое сообщение с Вашего сайта";
        $mail->Body = "Имя: $name\nТелефон: $phone\nEmail: $email\nОписание: $description";

        // Отправка письма
        if ($mail->send()) {
            echo "Письмо успешно отправлено!";
        } else {
            echo "Ошибка при отправке письма: " . $mail->ErrorInfo;
        }
    } else {
        echo "Пожалуйста, заполните все обязательные поля.";
    }
}
?>
