-- MySQL dump 10.13  Distrib 5.6.50, for Linux (x86_64)
--
-- Host: localhost    Database: lucky
-- ------------------------------------------------------
-- Server version	5.6.50-log

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
-- Table structure for table `lucky_sign`
--

DROP TABLE IF EXISTS `lucky_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lucky_sign` (
  `id` int(11) NOT NULL,
  `sign` varchar(100) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lucky_sign`
--

LOCK TABLES `lucky_sign` WRITE;
/*!40000 ALTER TABLE `lucky_sign` DISABLE KEYS */;
INSERT INTO `lucky_sign` VALUES (1,'syw','生活就像海洋，只有意志坚强的人才能到达彼岸'),(2,'帕斯卡','信仰和迷信是截然不同的东西'),(3,'syw','人生无常'),(4,'qyd','蚊子滚出地球（不是x'),(5,'李诩','一日不书，百事荒芜。'),(6,'佚名','未知全貌，不予置评'),(7,'韩愈','书山有路勤为径,学海无涯苦作舟。'),(8,'佚名','树不修,长不直;人不学,没知识。'),(9,'王小波','如果我会发光，就不必害怕黑暗。'),(10,'约翰逊','成大事不在于力量多少，而在能坚持多久。'),(11,'qyd','人生无常，大肠包小肠(x');
/*!40000 ALTER TABLE `lucky_sign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'lucky'
--

--
-- Dumping routines for database 'lucky'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-03 17:29:40
