-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: wolfchatter
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chatroom`
--

DROP TABLE IF EXISTS `chatroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chatroom` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `chatroom_name` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatroom`
--

LOCK TABLES `chatroom` WRITE;
/*!40000 ALTER TABLE `chatroom` DISABLE KEYS */;
INSERT INTO `chatroom` VALUES (1,'Chatroom 1','Rares','message','15/07/2018'),(2,'Chatroom 1','Rares','message 2','15/08/2018'),(3,'Chatroom 1','Rares','message 2','15/08/2018'),(4,'Chatroom 0','wow','hello','Tue Jul 3 2018 01:10am'),(5,'Chatroom 1','wow2','hello','Tue Jul 3 2018 01:10am'),(6,'Chatroom 1','wow23','hello','Tue Jul 3 2018 01:10am'),(7,'Chatroom 0','sdfsd','adsaf','Tue Jul 3 2018 01:11am'),(8,'Chatroom 0','sdfsdasdas','adsafdas','Tue Jul 3 2018 01:11am'),(9,'Chatroom 0','buzica','wowooow','Tue Jul 3 2018 01:13am'),(10,'Chatroom 0','buzica','omggggg','Tue Jul 3 2018 01:13am'),(11,'Chatroom 2','Rares','asdasdasd','Tue Jul 3 2018 16:32pm'),(12,'Chatroom 2','Rares','asdasdasd123123','Tue Jul 3 2018 16:32pm'),(13,'Chatroom 2','Rares','asdasdasd123123123123','Tue Jul 3 2018 16:32pm'),(14,'Chatroom 2','Buze','??????','Tue Jul 3 2018 16:32pm'),(15,'Chatroom 2','Buze','??????','Tue Jul 3 2018 16:32pm'),(16,'Chatroom 2','Buze','??????123','Tue Jul 3 2018 16:32pm');
/*!40000 ALTER TABLE `chatroom` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-03 16:38:25
