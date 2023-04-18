CREATE DATABASE resultsEurovision;
USE resultsEurovision;

CREATE TABLE finalists (
    CountryID int NOT NULL AUTO_INCREMENT,
    Finalists VARCHAR(255) NOT NULL,
    PRIMARY KEY(CountryID)
);

INSERT INTO finalists (Finalists) values 
('Albania'),
('Azerbaijan'),
('Belgium'),
('Bulgaria'),
('Cyprus'),
('Finland'),
('France'),
('Germany'),
('Greece'),
('Iceland'),
('Israel'),
('Italy'),
('Lithuania'),
('Malta'),
('Moldova'),
('Netherlands'),
('Norway'),
('Portugal'),
('Russia'),
('San Marino'),
('Serbia'),
('Spain'),
('Sweden'),
('Switzerland'),
('Ukraine'),
('United Kingdom');

CREATE TABLE juryvotes (
    CountryID int NOT NULL AUTO_INCREMENT,
    Juryvotes DECIMAL (3, 0) NOT NULL,
    PRIMARY KEY(CountryID)
);

INSERT INTO juryvotes (Juryvotes) values 
(22),
(32),
(71),
(140),
(50),
(83),
(248),
(3),
(91),
(198),
(73),
(206),
(55),
(208),
(53),
(11),
(15),
(126),
(104),
(37),
(20),
(6),
(46),
(267),
(97),
(0);

CREATE TABLE televotes (
    CountryID int NOT NULL AUTO_INCREMENT,
    Televotes DECIMAL (3, 0) NOT NULL,
    PRIMARY KEY(CountryID)
);

INSERT INTO televotes (Televotes) values 
(35),
(33),
(3),
(30),
(44),
(218),
(251),
(0),
(79),
(180),
(20),
(318),
(165),
(47),
(62),
(0),
(60),
(27),
(100),
(13),
(82),
(0),
(63),
(165),
(267),
(0);

SELECT f.Finalists, j.Juryvotes FROM finalists AS f 
JOIN juryvotes AS j ON j.CountryID = f.CountryID
ORDER BY Juryvotes DESC;

SELECT f.Finalists, j.Televotes FROM finalists AS f 
JOIN televotes AS j ON j.CountryID = f.CountryID
ORDER BY Televotes DESC;

SELECT f.Finalists, g.Juryvotes, j.Televotes, (j.televotes + g.juryvotes) AS Total 
FROM finalists AS f 
JOIN juryvotes AS g on g.CountryID = f.CountryID 
JOIN televotes AS j ON j.CountryID = f.CountryID 
ORDER BY Total DESC;


//NOT USED

//Juryvotes not used 
INSERT INTO juryvotes (Country, Juryvotes) values 
('Albania', 22),
('Azerbaijan', 32),
('Belgium',	71),
('Bulgaria', 140),
('Cyprus', 50),
('Finland', 83),
('France', 248),
('Germany', 3),
('Greece', 91),
('Iceland',	198),
('Israel', 73),
('Italy', 206),
('Lithuania', 55),
('Malta', 208),
('Moldova',	53),
('Netherlands', 11),
('Norway', 15),
('Portugal', 126),
('Russia', 104),
('San Marino', 37),
('Serbia', 20),
('Spain', 6),
('Sweden', 46),
('Switzerland',	267),
('Ukraine', 97),
('United Kingdom', 0);

// Televotes not used
('Albania', 35),
('Azerbaijan', 33),
('Belgium',	3),
('Bulgaria', 30),
('Cyprus', 44),
('Finland', 218),
('France', 251),
('Germany', 0),
('Greece', 79),
('Iceland',	180),
('Israel', 20),
('Italy', 318),
('Lithuania', 165),
('Malta', 47),
('Moldova',	62),
('Netherlands', 0),
('Norway', 60),
('Portugal', 27),
('Russia', 100),
('San Marino', 13),
('Serbia', 82),
('Spain', 0),
('Sweden', 63),
('Switzerland',	165),
('Ukraine', 267),
('United Kingdom', 0);

SELECT * FROM finalists AS f JOIN televotes AS j ON j.CountryID = f.CountryID;


SELECT * FROM finalists AS f JOIN televotes AS j ON j.CountryID = f.CountryID JOIN juryvotes AS g on g.CountryID = f.CountryID;

SELECT f.Finalists, j.Televotes, g.Juryvotes FROM finalists AS f JOIN televotes AS j ON j.CountryID = f.CountryID JOIN juryvotes AS g on g.CountryID = f.CountryID;



