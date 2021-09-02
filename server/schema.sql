DROP DATABASE IF EXISTS surfinch;

CREATE DATABASE surfinch;

USE surfinch;

/* Table for the user info */
CREATE TABLE user_profile (
  userID INT NOT NULL AUTO_INCREMENT,
  username TEXT,
  email TEXT,
  avatar_pic TEXT,
  avatar_background TEXT,
  entries INT DEFAULT 0,
  logins INT DEFAULT 1,
  PRIMARY KEY (userID)
);

CREATE TABLE user_birds (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID INT,
  bird TEXT,
  date date,
  birdpic_url TEXT,
  notes TEXT,
  city_sighted TEXT,
  state_sighted TEXT,
  longitude TEXT,
  latitude TEXT,
  user_profileID INT,
  CONSTRAINT user_profileID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);

CREATE TABLE user_friends (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID INT,
  userBirdCount INT,
  friends INT,
  user_profileID INT,
  CONSTRAINT user_prof_friendsID
  FOREIGN KEY (user_profileID)
    REFERENCES user_profile(userID)
);

CREATE TABLE bird_data (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  common_name TEXT NOT NULL,
  species_code TEXT NOT NULL,
  category TEXT NOT NULL,
  taxon_order INT NOT NULL,
  com_name_codes TEXT,
  sci_name_codes TEXT,
  banding_codes TEXT,
  species_order TEXT,
  family_com_name TEXT,
  family_sci_name TEXT,
  report_as TEXT,
  extinct TEXT,
  extinct_year TEXT
);

INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Admin', 'email@admin.com', 'goose', '#c8994d', 5, 29);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('AJP', 'AJP@admin.com', 'eagle', '#c8994d', 17, 14);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Shay', 'Shay@admin.com', 'hummingbird', '#c8994d', 2, 3);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Smitty', 'Smitty@admin.com', 'tropical', '#c8994d', 0, 7);
INSERT INTO user_profile (username, email, avatar_pic, avatar_background, entries, logins) VALUES ('Regionald', 'Regionald@admin.com', 'crane', '#c8994d', 8, 2);
