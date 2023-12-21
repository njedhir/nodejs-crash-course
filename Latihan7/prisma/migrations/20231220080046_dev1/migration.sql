-- CreateTable
CREATE TABLE `karyawan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(64) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `gaji` DOUBLE NOT NULL,
    `gelar` VARCHAR(191) NULL,

    UNIQUE INDEX `karyawan_email_key`(`email`),
    INDEX `karyawan_email_nama_idx`(`email`, `nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
