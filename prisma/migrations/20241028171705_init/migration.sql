-- CreateTable
CREATE TABLE `inventory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemName` VARCHAR(255) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `playerUserId` INTEGER NULL,

    INDEX `FK_8f3cdf8de1bd07b1fd2172d1894`(`playerUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `player` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `nickname` VARCHAR(500) NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 1,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `coin` INTEGER NOT NULL DEFAULT 0,
    `totalSpentCoin` INTEGER NOT NULL DEFAULT 0,
    `diamond` INTEGER NOT NULL DEFAULT 0,
    `totalSpentDiamond` INTEGER NOT NULL DEFAULT 0,
    `energy` INTEGER NOT NULL DEFAULT 0,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `IDX_7baa5220210c74f8db27c06f8b`(`name`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `FK_8f3cdf8de1bd07b1fd2172d1894` FOREIGN KEY (`playerUserId`) REFERENCES `player`(`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
