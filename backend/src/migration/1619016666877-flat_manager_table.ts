import {MigrationInterface, QueryRunner} from "typeorm";

export class flatManagerTable1619016666877 implements MigrationInterface {
    name = 'flatManagerTable1619016666877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `log` (`id` int NOT NULL AUTO_INCREMENT, `date` date NOT NULL, `sum` float NOT NULL, `actual_balance` float NOT NULL, `comment` text NULL, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `owner` (`id` int NOT NULL AUTO_INCREMENT, `name` text NOT NULL, `active` tinyint NOT NULL, `balance` float(12,2) NOT NULL, `apartmentId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `apartment` (`id` int NOT NULL AUTO_INCREMENT, `floor` int NOT NULL, `door` int NOT NULL, `area` float NOT NULL, `volume` float NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `log` ADD CONSTRAINT `FK_0ae1c0cec20d47227597633c6f1` FOREIGN KEY (`ownerId`) REFERENCES `owner`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `owner` ADD CONSTRAINT `FK_52f9ab965fe9e0339fcce074a2b` FOREIGN KEY (`apartmentId`) REFERENCES `apartment`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `owner` DROP FOREIGN KEY `FK_52f9ab965fe9e0339fcce074a2b`");
        await queryRunner.query("ALTER TABLE `log` DROP FOREIGN KEY `FK_0ae1c0cec20d47227597633c6f1`");
        await queryRunner.query("DROP TABLE `apartment`");
        await queryRunner.query("DROP TABLE `owner`");
        await queryRunner.query("DROP TABLE `log`");
    }

    /*
insert into apartment VALUES(1,0,1,30,78);
insert into apartment VALUES(2,0,2,50,130);
INSERT INTO apartment values(3,0,3,63,163.8);
insert into apartment VALUES(4,1,1,30,78);
insert into apartment VALUES(5,1,2,50,130);
INSERT INTO apartment values(6,1,3,63,163.8);
insert into apartment VALUES(7,2,1,30,78);
insert into apartment VALUES(8,2,2,50,130);
INSERT INTO apartment values(9,2,3,63,163.8);
insert into apartment VALUES(10,3,1,30,78);
insert into apartment VALUES(11,3,2,50,130);
INSERT INTO apartment values(12,3,3,63,163.8);
    */

}
