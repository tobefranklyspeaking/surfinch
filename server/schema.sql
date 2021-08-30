CREATE DATABASE surfinch;

USE surfinch;

/* Table for the user info */
CREATE TABLE user_profile (
  userID INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  profile_pic_url TEXT,
  PRIMARY KEY (userID)
);

CREATE TABLE user_birds (
  id INT NOT NULL AUTO_INCREMENT,
  userID INT,
  bird TEXT,
  birdpic_url TEXT,
  notes TEXT,
  city_sighted TEXT,
  state_sighted TEXT,
  longitude DECIMAL(8, 6),
  latitude DECIMAL(8, 6),
  user_profileID INT,
  CONSTRAINT user_profileID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);

CREATE TABLE user_friends (
  id INT NOT NULL AUTO_INCREMENT,
  userID INT,
  userBirdCount INT,
  friends INT,
  user_profileID INT,
  CONSTRAINT user_prof_friendsID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);



