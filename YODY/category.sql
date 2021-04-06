-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: nonprod-yody-mysql.cexn69udh7zl.ap-southeast-1.rds.amazonaws.com:3306
-- Thời gian đã tạo: Th4 05, 2021 lúc 10:23 AM
-- Phiên bản máy phục vụ: 8.0.20
-- Phiên bản PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dev_product_service`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` bigint DEFAULT NULL,
  `created_name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `updated_by` varchar(50) NOT NULL,
  `updated_date` bigint DEFAULT NULL,
  `updated_name` varchar(255) NOT NULL,
  `version` smallint NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `goods` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `key_menu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `created_by`, `created_date`, `created_name`, `is_deleted`, `updated_by`, `updated_date`, `updated_name`, `version`, `code`, `goods`, `name`, `parent_id`, `key_menu`) VALUES
(1, 'UUID-213', 1617421965297, 'admin', 0, 'UUID-213', 1617421965297, 'admin', 1, 'n6', 1, 'Nữ', -1, ''),
(2, 'UUID-213', 1617422004629, 'admin', 0, 'UUID-123', 1617422117409, 'admin', 2, 'n7', 1, 'Áo polo', -1, '1'),
(3, 'UUID-213', 1617443432353, 'admin', 0, 'UUID-123', 1617610434702, 'admin', 5, 'YD123', 1, 'Test213', 2, '1'),
(4, 'UUID-213', 1617604577835, 'admin', 0, 'UUID-213', 1617604577835, 'admin', 1, 'YD999', 1, 'Test sa', 1, '1');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
