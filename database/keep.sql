SET NAMES UTF8;
DROP DATABASE IF EXISTS keep;
CREATE DATABASE keep CHARSET=UTF8;
USE keep;
CREATE TABLE keep_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16) NOT NULL UNIQUE,
  avatar VARCHAR(128),
  gender INT
);
INSERT INTO keep_user VALUES(null,'axmak',123456789,'www.axmak@hotmail.com',12345678910,'4d6a7f367e7e7190da243f04a5b36263b5b320a8.jpg',0);
INSERT INTO keep_user VALUES(null,'rains',987654321,'www.rains@hotmail.com',12345678913,'d3b28ad1b3012cc872a9e797d2d3c3d57362c149.jpg',1);
INSERT INTO keep_user VALUES(null,'salt',111555999,'www.salt@hotmail.com',12345678912,'7f6c8088d35d8147309b79c6f9afedcbe1a97c41.jpg',0);
INSERT INTO keep_user VALUES(null,'ken',321456987,'www.ken@hotmail.com',12345678911,'fe5df232cafa4c4e0f1a0294418e5660.jpg',1);

CREATE TABLE keep_car1(
  cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  img_url VARCHAR(128),
  avatar VARCHAR(128)
);
INSERT INTO keep_car1 
VALUES(null,'20e8a132fbd1724ea4bd3b6c0fe1339dee3443b4_1440x1081.jpg','4d6a7f367e7e7190da243f04a5b36263b5b320a8.jpg');
INSERT INTO keep_car1
VALUES(null,'7dc5a67c75781c8dcb02bd25e0adf414f4a774a1_1440x1080.jpg','fe5df232cafa4c4e0f1a0294418e5660.jpg');
INSERT INTO keep_car1
VALUES(null,'e7f0d2a1ac49b3dae0321143955f839020e3f5dc_1280x960.jpg','d3b28ad1b3012cc872a9e797d2d3c3d57362c149.jpg');
INSERT INTO keep_car1
VALUES(null,'7cda9b8d905047173569da5d17c9e26510ac951e_1280x960.jpg','7f6c8088d35d8147309b79c6f9afedcbe1a97c41.jpg');
INSERT INTO keep_car1
VALUES(null,'9c08833bb46d513b35652986fe69b7f222541ed7_1440x1082.jpg','203c02bef77af1da58670b2c31f1163f8d0bbc9a.png');
INSERT INTO keep_car1
VALUES(null,'e7f0d2a1ac49b3dae0321143955f839020e3f5dc_1280x960.jpg','515839133a2037a092928e6a99ad5d3009ec83f8_1200x1200.jpg');

CREATE TABLE keep_car2(
  cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  img_url VARCHAR(128),
  avatar VARCHAR(128)
);
INSERT INTO keep_car2
VALUES(null,'4ba863e67e7e663a69976c04e49f5c9fecbcd08e_1438x1078.jpg','3de4765c0608e39062c5e5b1b1948974346c0c5e.jpg');
INSERT INTO keep_car2
VALUES(null,'db9ecccc63c8385e5b2a83a06ace7c403ba40cd9_1438x1440.jpg','a682b02b60b0e13bd17ca93e32805ce367eeee0c.jpg');
INSERT INTO keep_car2
VALUES(null,'f51228c3783f465e4ea67160efafab4d47329066_1440x1080.jpg','1994f10517850243cbb1ca68a8a7e56504075417.jpg');


INSERT INTO keep_car2
VALUES(null,'1dc5aced70ac3de620a0fcb2f8e663e6b2d31eee_1440x1330.jpg','f6badb857c7afdaeed6dfc28688b85e07a3226ee.png');
INSERT INTO keep_car2
VALUES(null,'1575fba122e15ad623391bd7864206fddd08f96b_1440x1440.jpg','80a51314adbd0c6a092063f8213daab66bc12ea0.jpg');
INSERT INTO keep_car2
VALUES(null,'1556266897816_694x694.jpg','6da86e1ce07a13204b628f58d46def39a3227b41_1386x1440.jpg');


CREATE TABLE keep_detail(
  sid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname  VARCHAR(32),
  sport_details  VARCHAR(64),
  avatar VARCHAR(128)
);
INSERT INTO keep_detail
VALUES(null,'axmak','刚刚完成了 腿部塑形','f6badb857c7afdaeed6dfc28688b85e07a3226ee.png');
INSERT INTO keep_detail
VALUES(null,'rains','刚跑了32.5分钟','6da86e1ce07a13204b628f58d46def39a3227b41_1386x1440.jpg');
INSERT INTO keep_detail
VALUES(null,'salt','跑完了 4.02 公里','80a51314adbd0c6a092063f8213daab66bc12ea0.jpg');
INSERT INTO keep_detail
VALUES(null,'krinstina','刚做完了一组 跑后拉伸','7f6c8088d35d8147309b79c6f9afedcbe1a97c41.jpg');
INSERT INTO keep_detail
VALUES(null,'ken','跑完了 1.53 公里','53f6e187e2d4dc3ac89c4c78fb35b0ef30a6656c_1267x1267.jpg');
INSERT INTO keep_detail
VALUES(null,'tina','刚刚完成了 搏击操 · 拳腿组合进阶','f6badb857c7afdaeed6dfc28688b85e07a3226ee.png');
INSERT INTO keep_detail
VALUES(null,'kat','刚刚完成了 平板支撑','d3b28ad1b3012cc872a9e797d2d3c3d57362c149.jpg');
INSERT INTO keep_detail
VALUES(null,'mooongli','刚做完了一组 健身房入门 · 女生版','8e408de154c3c746712928425d7853b78bd06681.jpg');
