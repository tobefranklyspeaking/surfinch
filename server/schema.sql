CREATE DATABASE surfinch;

USE surfinch;

/* Table for the user info */
CREATE TABLE user_profile (
  userID INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  profile_pic_url TEXT,
  PRIMARY KEY (userID)
);


/* Table for the user saved birds */
CREATE TABLE user_birds (
  userID INT,
  bird TEXT,
  birdpic_url TEXT,
  notes TEXT,
  city_sighted TEXT,
  state_sighted TEXT,
  longitude DECIMAL(8, 6),
  latitude DECIMAL(8, 6),
  FOREIGN KEY (userID)
);

/* Table for the user info */
CREATE TABLE user_friends (
  userID INT,
  friends INT,
  FOREIGN KEY (userID)
);

