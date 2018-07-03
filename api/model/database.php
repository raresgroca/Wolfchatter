<?php
// This contains the database workarounds of the API

class Database
{

    private $conn;

    private static $database = null;

    public function __construct()
    {
        if ($this->conn == null) {
            $this->conn = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE);
        }
    }

    public function getChatroomByName($name)
    {
        $sql = "SELECT * FROM chatroom WHERE chatroom_name = '" . $name . "'";
        $result = mysqli_query($this->conn, $sql);

        return mysqli_fetch_all($result);
    }

    public function addChatroomMessage($chatroom_name, $name, $message, $date)
    {
        $sql = "INSERT INTO chatroom (chatroom_name, username, message, date) VALUES ('$chatroom_name', '$name', '$message', '$date')";
        $result = mysqli_query($this->conn, $sql);
    }

    public static function getInstance()
    {
        if (Database::$database == null) {
            Database::$database = new Database();
        }

        return Database::$database;
    }
}

?>
