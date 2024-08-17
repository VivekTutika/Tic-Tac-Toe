CREATE DATABASE tictactoe;

USE tictactoe;

CREATE TABLE winners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    win_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    winner_name VARCHAR(255) NOT NULL
);

SELECT * FROM winners;