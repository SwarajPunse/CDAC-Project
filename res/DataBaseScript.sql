CREATE DATABASE  IF NOT EXISTS `urban_gallery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `urban_gallery`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: urban_gallery
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(90) DEFAULT NULL,
  `lname` varchar(90) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `mobile_no` varchar(12) DEFAULT NULL,
  `studio` varchar(100) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `approved` tinyint DEFAULT NULL,
  `m_id` int DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `m_id_idx` (`m_id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `m_id` FOREIGN KEY (`m_id`) REFERENCES `memberships` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artwork_categories`
--

DROP TABLE IF EXISTS `artwork_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artwork_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artwork_categories`
--

LOCK TABLES `artwork_categories` WRITE;
/*!40000 ALTER TABLE `artwork_categories` DISABLE KEYS */;
INSERT INTO `artwork_categories` VALUES (1,'Painting'),(2,'Rasin Arts'),(3,'Sculpture'),(4,'Cultural Arts'),(5,'Sketches');
/*!40000 ALTER TABLE `artwork_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artworks`
--

DROP TABLE IF EXISTS `artworks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artworks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `art_name` varchar(100) DEFAULT NULL,
  `art_description` varchar(500) DEFAULT NULL,
  `art_img` blob,
  `art_length` float DEFAULT NULL,
  `art_breadth` float DEFAULT NULL,
  `sold` tinyint DEFAULT NULL,
  `art_category_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `art_category_idx` (`art_category_id`),
  KEY `artist_idx` (`artist_id`),
  CONSTRAINT `art_category` FOREIGN KEY (`art_category_id`) REFERENCES `artwork_categories` (`id`),
  CONSTRAINT `artist` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artworks`
--

LOCK TABLES `artworks` WRITE;
/*!40000 ALTER TABLE `artworks` DISABLE KEYS */;
/*!40000 ALTER TABLE `artworks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corporate_customers`
--

DROP TABLE IF EXISTS `corporate_customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `corporate_customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firmname` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `mobile_no` varchar(12) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `gst_no` varchar(12) DEFAULT NULL,
  `approved` tinyint DEFAULT NULL,
  `m_id` int DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `m2_id_idx` (`m_id`),
  KEY `login2_id_idx` (`login_id`),
  CONSTRAINT `login2_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `m2_id` FOREIGN KEY (`m_id`) REFERENCES `memberships` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corporate_customers`
--

LOCK TABLES `corporate_customers` WRITE;
/*!40000 ALTER TABLE `corporate_customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `corporate_customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(90) DEFAULT NULL,
  `lname` varchar(90) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `mobile_no` varchar(12) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `approved` tinyint DEFAULT NULL,
  `m_id` int DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `login_id_idx` (`login_id`),
  KEY `m_id_idx` (`m_id`),
  CONSTRAINT `login1_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`id`),
  CONSTRAINT `m1_id` FOREIGN KEY (`m_id`) REFERENCES `memberships` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(90) DEFAULT NULL,
  `password` varchar(90) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `roles_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `roles_id_idx` (`roles_id`),
  CONSTRAINT `roles_id` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memberships`
--

DROP TABLE IF EXISTS `memberships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memberships` (
  `id` int NOT NULL,
  `mname` varchar(90) DEFAULT NULL,
  `duration(months)` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memberships`
--

LOCK TABLES `memberships` WRITE;
/*!40000 ALTER TABLE `memberships` DISABLE KEYS */;
INSERT INTO `memberships` VALUES (1,'Ar_Gold',3,500),(2,'Ar_Platinum',6,800),(3,'Ar_Diamond',12,1200),(4,'Cu_Gold',3,500),(5,'Cu_Platinum',6,800),(6,'Cu_Diamond',12,1200),(7,'Co_Gold',3,1000),(8,'Co_Platinum',6,2000),(9,'Co_Diamond',12,3000);
/*!40000 ALTER TABLE `memberships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artwork_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artwork_id_idx` (`artwork_id`),
  KEY `order_id_idx` (`order_id`),
  CONSTRAINT `artwork_id` FOREIGN KEY (`artwork_id`) REFERENCES `artworks` (`id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cust_id` int DEFAULT NULL,
  `corporate_id` int DEFAULT NULL,
  `delivery_status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cust_id_idx` (`cust_id`),
  KEY `corporate_id_idx` (`corporate_id`),
  CONSTRAINT `corporate_id` FOREIGN KEY (`corporate_id`) REFERENCES `corporate_customers` (`id`),
  CONSTRAINT `cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artist_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `corporate_id` int DEFAULT NULL,
  `artwork_id` int DEFAULT NULL,
  `review` varchar(250) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artist1_id_idx` (`artist_id`),
  KEY `customer2_id_idx` (`customer_id`),
  KEY `corporate2_id_idx` (`corporate_id`),
  KEY `artwork1_id_idx` (`artwork_id`),
  CONSTRAINT `artist1_id` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`),
  CONSTRAINT `artwork1_id` FOREIGN KEY (`artwork_id`) REFERENCES `artworks` (`id`),
  CONSTRAINT `corporate2_id` FOREIGN KEY (`corporate_id`) REFERENCES `corporate_customers` (`id`),
  CONSTRAINT `customer2_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Artist'),(3,'Customer'),(4,'Corporate Customer');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `corporate_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `Date-Time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `corporate_id_idx` (`corporate_id`),
  KEY `order_id_idx` (`order_id`),
  CONSTRAINT `corporate1_id` FOREIGN KEY (`corporate_id`) REFERENCES `corporate_customers` (`id`),
  CONSTRAINT `customer1_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `order1_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 11:50:02
