CREATE TABLE IF NOT EXISTS `images` (
  `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
  `url` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);