-- CreateTable
CREATE TABLE `office` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `ci` VARCHAR(191) NOT NULL,
    `user_netbank` VARCHAR(191) NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `stamp` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `office_id` INTEGER NOT NULL,
    `profile_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,
    `area_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `request_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` INTEGER NOT NULL,
    `access_profile` VARCHAR(191) NOT NULL,
    `comments` TEXT NOT NULL,
    `quite_date` DATETIME(3) NULL,
    `quite_type` VARCHAR(191) NULL,
    `quite_reason` TEXT NULL,
    `reinstaitment_date` DATETIME(3) NULL,
    `other` TEXT NULL,
    `request_by` VARCHAR(191) NULL,
    `authorized_by` VARCHAR(191) NULL,
    `executed_by` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operational_system` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `form_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `finantial_core_options` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `option` VARCHAR(191) NOT NULL,
    `form_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `area_id` INTEGER NOT NULL,
    `file` VARCHAR(191) NOT NULL,
    `other` TEXT NULL,
    `status` VARCHAR(191) NOT NULL,
    `request_by` VARCHAR(191) NULL,
    `approved_by` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inform_area` (
    `inform_id` INTEGER NOT NULL,
    `area_id` INTEGER NOT NULL,

    PRIMARY KEY (`inform_id`, `area_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inform` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `area_id` INTEGER NOT NULL,
    `requested_file` VARCHAR(191) NOT NULL,
    `response_file` VARCHAR(191) NOT NULL,
    `other` TEXT NULL,
    `status` VARCHAR(191) NOT NULL,
    `request_by` VARCHAR(191) NULL,
    `executed_by` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_office_id_fkey` FOREIGN KEY (`office_id`) REFERENCES `office`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_profile_id_fkey` FOREIGN KEY (`profile_id`) REFERENCES `user_profile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `form` ADD CONSTRAINT `form_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `operational_system` ADD CONSTRAINT `operational_system_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `finantial_core_options` ADD CONSTRAINT `finantial_core_options_form_id_fkey` FOREIGN KEY (`form_id`) REFERENCES `form`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contract` ADD CONSTRAINT `contract_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inform_area` ADD CONSTRAINT `inform_area_inform_id_fkey` FOREIGN KEY (`inform_id`) REFERENCES `inform`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inform_area` ADD CONSTRAINT `inform_area_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `area`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inform` ADD CONSTRAINT `inform_area_id_fkey` FOREIGN KEY (`area_id`) REFERENCES `area`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
