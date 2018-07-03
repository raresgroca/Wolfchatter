<?php
// This contains the index/main/the entry point of the API

require_once 'config/config.php';
require_once 'controller/controller.php';

class Main
{

    private $controller;

    private $path;

    public function __construct($path)
    {
        $this->path = $path;
        $this->controller = new Controller();
    }

    public function start()
    {
        $args = explode('/', $this->path);

        if ($args[0] == 'getChatroom') {
            // Get the chatroom by name
            $this->controller->getChatroomByName();
        } elseif ($args[0] == 'addChatroomMessage') {
            // Add the chatroom to database
            $this->controller->addChatroomMessage();
        }
    }
}

if (isset($_GET['path']) && $_GET['path']) {
    $main = new Main($_GET['path']);
    $main->start();
} else {
    die("Route not found");
}

?>
