SET NAMES UTF8;
DROP DATABASE IF EXISTS tab;
CREATE DATABASE tab CHARSET=UTF8;
USE tab;

#网站基本信息
CREATE TABLE tab_site_info(
  site_name VARCHAR(16),
  logo VARCHAR(64),
  copyright VARCHAR(64)
);
INSERT INTO tab_site_info VALUES
('buger','image','copyright');

#导航条目
CREATE TABLE tab_navbar_item(
  name VARCHAR(16),
  url VARCHAR(64),
  title VARCHAR(16)
);
INSERT INTO tab_navbar_item VALUES
('Home','/index.html','我们的首页'),
('About','/index.html','关于我们'),
('Services','/index.html','我们的服务'),
('Gallery','/index.html','产品相册展示'),
('News','/index.html','最新信息'),
('Team','/index.html','我们的团队'),
('Contact us','/index.html','联系我们');

#关于我们
CREATE TABLE tab_about_us(
  aname VARCHAR(32),
  url VARCHAR(127)
);
INSERT INTO tab_about_us VALUES
('新品上市','/index.html'),
('热卖产品','/index.html'),
('经典套餐','/index.html'),
('小食饮品','/index.html');

#我们的服务
CREATE TABLE tab_services(
  sname VARCHAR(32),
  stitle VARCHAR(128)
);
INSERT INTO tab_services VALUES
('给我们的服务点赞','进入与大家分享对我们的好评'),
('我们餐厅的内部运作','点击进入了解更多关于我们餐厅的内部运作'),
('顾客对我们餐厅的点评','点击进入评论区与大家分享对于我们餐厅的建议与意见'),
('在线点餐','多样式的在线点餐'),
('其他分店','关于我们餐厅其他地区的详细地址'),
('加入我们的大家庭','成为我们的一员向顾客提供完美的服务');

#优惠券
CREATE TABLE tab_coupon(
  cid TINYINT PRIMARY KEY AUTO_INCREMENT,
  cpic VARCHAR(32),
  cname VARCHAR(16),
  curl VARCHAR(32)
);
INSERT INTO tab_coupon VALUES
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html');

#最新消息
CREATE TABLE tab_news(
  nid TINYINT PRIMARY KEY AUTO_INCREMENT,
  npic VARCHAR(32),
  nname VARCHAR(16),
  nurl VARCHAR(32)
);
INSERT INTO tab_news VALUES
(NULL,'image','关注微博','/index.html'),
(NULL,'image','微信扫一扫','/index.html'),
(NULL,'image','支付宝扫一扫','/index.html');

#产品相册展示
CREATE TABLE tab_gallery(
  gid TINYINT PRIMARY KEY AUTO_INCREMENT,
  gpic VARCHAR(32),
  gname VARCHAR(32),
  gurl VARCHAR(64)
);
INSERT INTO tab_gallery VALUES
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html');

#我们的团队
CREATE TABLE tab_our_team(
  oid TINYINT PRIMARY KEY AUTO_INCREMENT,
  opic VARCHAR(32),
  otitle VARCHAR(64),
  ourl VARCHAR(64)
);
INSERT INTO tab_our_team VALUES
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html'),
(NULL,'image','NULL','/index.html');

#用户列表
CREATE TABLE tab_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(8),
  upwd VARCHAR(16),
  uemail VARCHAR(16),
  uphone VARCHAR(16),
  avatar VARCHAR(32),
  user_name VARCHAR(8),
  gender BOOL
);


#产品种类
CREATE TABLE tab_buger(
  bid SMALLINT PRIMARY KEY AUTO_INCREMENT,
  bcname VARCHAR(16),
  bename VARCHAR(32),
  bdetail VARCHAR(64)
);

INSERT INTO tab_buger VALUES
(1,'经典安格斯厚牛堡原味/天椒','CLASSIC/SPICY ANGUS BEEF BURGER','内含鲜嫩多汁、肉香丰盈的安格斯牛肉，伴随着红酒洋葱酱和黑椒酱，一块奶香四溢的车打芝士覆盖其上，新鲜的生菜带来清脆的口感，这所有经典的好风味，由两块口感松软的黄油面包包裹，融合成一口口牛味十足的体验。'),
(2,'德州烟熏安格斯厚牛堡','TEXAS ANGUS SMOKEY BEEF BURGER','在安格斯牛肉鲜美浓郁的风味之上，烟熏牛肉加上了淡淡的盐和柴火气息，烧烤酱的滋味点缀其间，油炸洋葱粒增加了松脆的口感，这都包裹在两片黄油面包中，一口咬下，丰厚的肉香被面包和芝士的奶香衬托得淋漓尽致。'),
(3,'皇堡/天椒皇堡','WHOPPER/SPICY WHOPPER','100%火烤牛肉，肉质紧实，鲜嫩多汁，加入番茄、酸黄瓜等新鲜蔬菜，更添美味爽口。8种原料层层叠加，分量十足，丰富味觉享受。'),
(4,'双层皇堡/天椒皇堡','WHOPPER/SPICYWHOPPET-DOUBLE','100%火烤牛肉，肉质紧实，鲜嫩多汁，加入番茄、酸黄瓜等新鲜蔬菜，更添美味爽口。双层肉饼、8种原料层层叠加，分量十足，丰富味觉享受。');