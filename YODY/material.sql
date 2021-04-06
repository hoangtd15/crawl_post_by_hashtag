-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: nonprod-yody-mysql.cexn69udh7zl.ap-southeast-1.rds.amazonaws.com:3306
-- Thời gian đã tạo: Th4 05, 2021 lúc 04:45 AM
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
-- Cấu trúc bảng cho bảng `material`
--

CREATE TABLE `material` (
  `id` bigint NOT NULL,
  `code` varchar(36) NOT NULL,
  `created_by` varchar(36) NOT NULL,
  `created_date` bigint DEFAULT NULL,
  `created_name` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `updated_by` varchar(36) NOT NULL,
  `updated_date` bigint DEFAULT NULL,
  `updated_name` varchar(255) NOT NULL,
  `version` smallint NOT NULL,
  `component` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `material`
--

INSERT INTO `material` (`id`, `code`, `created_by`, `created_date`, `created_name`, `is_deleted`, `updated_by`, `updated_date`, `updated_name`, `version`, `component`, `description`, `name`) VALUES
(1, 'M001', 'UUID-213', 1617260889998, 'admin', 0, 'UUID-213', 1617260889998, 'admin', 1, 'Cotton', NULL, 'Cotton'),
(2, 'M002', 'UUID-213', 1617260909901, 'admin', 0, 'UUID-213', 1617260909901, 'admin', 1, 'Vải', NULL, 'Vải'),
(3, 'CF001', 'UUID-213', 1617270982533, 'admin', 0, 'UUID-213', 1617270982533, 'admin', 1, 'vải cà phê', NULL, 'Cà phê'),
(4, 'CL001', 'UUID-213', 1617588809711, 'admin', 0, 'UUID-213', 1617588809711, 'admin', 1, 'thành phần chất liệu', NULL, 'Chất liệu 1'),
(5, 'cl002', 'UUID-213', 1617591791192, 'admin', 0, 'UUID-213', 1617591791192, 'admin', 1, 'Vải, lion', NULL, 'CL001'),
(6, 'cl003', 'UUID-213', 1617591799814, 'admin', 0, 'UUID-213', 1617591799814, 'admin', 1, 'Vải, lion', NULL, 'CL003'),
(7, 'cl006', 'UUID-213', 1617591806866, 'admin', 0, 'UUID-213', 1617591806866, 'admin', 1, 'Vải, lion', NULL, 'CL006'),
(8, 'ABC00', 'UUID-213', 1617591834765, 'admin', 0, 'UUID-213', 1617591834765, 'admin', 1, 'a', NULL, 'ABC'),
(9, 'bbbb', 'UUID-213', 1617591865675, 'admin', 0, 'UUID-213', 1617591865675, 'admin', 1, 'bbb', NULL, 'bbbb'),
(10, 'gg01', 'UUID-213', 1617591934673, 'admin', 0, 'UUID-213', 1617591934673, 'admin', 1, 'thành phần chất liệu', NULL, 'ggg'),
(11, 'Test1', 'UUID-213', 1617592530424, 'admin', 0, 'UUID-213', 1617592530424, 'admin', 1, 'Test1', NULL, 'Test1'),
(12, 'code1', 'UUID-213', 1617592669564, 'admin', 0, 'UUID-213', 1617592669564, 'admin', 1, 'component1', NULL, 'name1'),
(13, 'MT1', 'UUID-213', 1617597397518, 'admin', 0, 'UUID-213', 1617597397518, 'admin', 1, 'ok', NULL, 'ok');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `material`
--
ALTER TABLE `material`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
