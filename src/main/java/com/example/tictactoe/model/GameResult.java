package com.example.tictactoe.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "winners")
public class GameResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "winner_name")
    private String winnerName;

    @Column(name = "win_timestamp")
    private LocalDateTime winTimestamp;

    // Constructors
    public GameResult() {}

    public GameResult(String winnerName) {
        this.winnerName = winnerName;
        this.winTimestamp = LocalDateTime.now();
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWinnerName() {
        return winnerName;
    }

    public void setWinnerName(String winnerName) {
        this.winnerName = winnerName;
    }

    public LocalDateTime getWinTimestamp() {
        return winTimestamp;
    }

    public void setWinTimestamp(LocalDateTime winTimestamp) {
        this.winTimestamp = winTimestamp;
    }
}
