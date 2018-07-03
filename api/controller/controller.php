/* This file contains the controllers of the API */

<?php

require_once 'model/database.php';

class Controller
{

    private $database;

    public function __construct()
    {
        $this->database = Database::getInstance();
    }

    public function addChatroomMessage()
    {

        if (isset($_POST['chatroom_name']) && $_POST['chatroom_name']
            && isset($_POST['username']) && $_POST['username']
            && isset($_POST['message']) && $_POST['message']
            && isset($_POST['date']) && $_POST['date']) {

            $chatroom_name = $_POST['chatroom_name'];
            $name = $_POST['username'];
            $message = $_POST['message'];
            $date = $_POST['date'];
        } else {
            die("Variabeles are not set");
        }

        $this->database->addChatroomMessage($chatroom_name, $name, $message, $date);
        die("TRUE");
    }

    public function getChatroomByName()
    {

        if (isset($_POST['name']) && $_POST['name']) {
            $name = $_POST['name'];
        } else {
            die("Name variable not sent");
        }

        $chatroomDetails = $this->database->getChatroomByName($name);

        die(json_encode($chatroomDetails, JSON_FORCE_OBJECT));
    }
}

?>
