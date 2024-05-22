-- MariaDB dump 10.19-11.3.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cs369_proj
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `prod`
--

DROP TABLE IF EXISTS `prod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prod` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path_picture` longtext DEFAULT NULL,
  `prod_name` text DEFAULT NULL,
  `details` longtext DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prod`
--

LOCK TABLES `prod` WRITE;
/*!40000 ALTER TABLE `prod` DISABLE KEYS */;
INSERT INTO `prod` VALUES
(1,'../pictures/cpu/amd/r31200am4.png','CPU AMD RYZEN 3 1200 3.1 GHz (SOCKET AM4)','\"4 Cores 4 Threads Discrete Graphics Required',' No Integrated Graphics PCIe 3.0\"',0),
(2,'../pictures/cpu/amd/r33200am4.jpg','CPU AMD RYZEN 3 3200G 3.6 GHz (SOCKET AM4)','4 Cores 4 Threads AMD Radeon Vega 8 Graphics PCIe 3.0','CPU',2570),
(3,'../pictures/r54600am4.jpg','CPU AMD RYZEN 5 4600 GHz (SOCKET AM4)','6 Cores 12 Threads AMD Radeon Graphics PCIe 3.0','CPU',3570),
(4,'../pictures/cpu/amd/r75700am4.jpg','CPU AMD RYZEN 7 5700G 3.8 GHz (SOCKET AM4)','8 Cores 16 Threads AMD Radeon Graphics PCIe 3.0','CPU',7890),
(5,'../pictures/cpu/amd/r97950x3dam5.jpg','CPU AMD RYZEN 9 7950X3D 4.2 GHz (SOCKET AM5)','16 Cores 32 Threads CPU Cooler NOT Included AMD Radeon Graphics PCIe 5.0','CPU',23900),
(6,'../pictures/cpu/intel/i5135001700.jpg','CPU INTEL CORE I5-13500 2.5 GHz (SOCKET LGA 1700)','\"14 (6P+8E) Cores 20 Threads Intel UHD Graphics 770 PCIe 5.0 and 4.0 Compatible with B660',' B760',0),
(7,'../pictures/cpu/intel/i7137001700.jpg','CPU INTEL CORE I7-13700 2.1 GHz (SOCKET LGA 1700)','\"16 (8P+8E) Cores 24 Threads Intel UHD Graphics 770 PCIe 5.0 and 4.0 Compatible with B660',' B760',0),
(8,'../pictures/cpu/inteli913900F1700.jpg','CPU INTEL CORE I9-13900F 2.0GHz (SOCKET LGA 1700)','\"24 (8P+16E) Cores 32 Threads PCIe 5.0 and 4.0 Compatible with B660',' B760',0),
(9,'../pictures/mainboard/asrockx570phtgm4.jpg','MAINBOARD AM4 ASROCK X570 PHANTOM GAMING 4','AMD AM4 AMD X570 4xDDR4 DIMM ATX','Mainboard',5490),
(10,'../pictures/mainboard/msib450mprom.png','MAINBOARD AM4 MSI B450M-A PRO MAX','AMD AM4 AMD B450 2xDDR4 DIMM Micro-ATX','Mainboard',1990),
(11,'../pictures/mainboard/msib660mapro.png','MAINBOARD 1700 MSI PRO B660M-A DDR4','Intel LGA 1700 Intel B660 4xDDR4 DIMM Micro-ATX','Mainboard',5050),
(12,'../pictures/mainboard/ggbb660mds3h.jpg','MAINBOARD 1700 GIGABYTE B660 DS3H DDR4','Intel LGA 1700 Intel B660 4xDDR4 DIMM ATX','Mainboard',4690),
(13,'../pictures/vga/pwcrx7900xt.jpg','VGA POWERCOLOR HELLHOUND AMD RADEON RX 7900 XT 20GB GDDR6 (RX 7900 XT 20G-L/OC)','Radeon RX 7900 XT 20GB GDDR6 3xDP 1xHDMI','VGA',35900),
(14,'../pictures/vga/intelarca770phtgd.png','VGA ASROCK INTEL ARC A770 PHANTOM GAMING D 8GB OC - 8GB GDDR6 (A770 PGD 8GO)','Arc A770 8GB GDDR6 3xDP 1xHDMI','VGA',13900),
(15,'../pictures/vga/msirtx3060ti8g.jpg','VGA MSI GEFORCE RTX 3060 TI TWIN FAN 8G OC LHR - 8GB GDDR6','GeForce RTX 3060 Ti 8GB GDDR6 3xDP 1xHDMI','VGA',11900),
(16,'../pictures/vga/glrtx40608g.jpg','VGA GALAX GEFORCE RTX 4060 1-CLICK OC - 8GB GDDR6','GeForce RTX 4060 8GB GDDR6 3xDisplayPort 1xHDMI','VGA',10500),
(17,'../pictures/vga/msirtx4070ti12g.png','VGA MSI GEFORCE RTX 4070 TI VENTUS 3X 12G OC - 12GB GDDR6X','GeForce RTX 4070 Ti 12GB GDDR6X 3xDP 1xHDMI','VGA',28900),
(18,'../pictures/powersp/msia600dn600w.jpg','PSU MSI MAG A600DN 600W (80+WHITE)','600W 80 plus','Powersupply',1530),
(19,'../pictures/powersp/csrm850e850w.png','PSU CORSAIR RM850E - 850W (80+ GOLD) (CP-9020263-NA)','850W 80 plus gold','Powersupply',4090);
/*!40000 ALTER TABLE `prod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'e3mily','emi.ra@domemail.com','152uu4'),
(2,'nora115','nora.su@domemail.com','365ori_t');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-21 11:25:24
