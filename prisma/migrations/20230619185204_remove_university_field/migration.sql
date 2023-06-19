-- CreateTable
CREATE TABLE `student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `full_name` VARCHAR(64) NOT NULL,
    `degree` VARCHAR(128) NULL,
    `specialization` VARCHAR(128) NULL,
    `age_of_studing` INTEGER NULL,
    `final_score` INTEGER NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
