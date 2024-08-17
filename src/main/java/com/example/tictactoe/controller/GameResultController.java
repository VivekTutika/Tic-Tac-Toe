package com.example.tictactoe.controller;

import com.example.tictactoe.model.GameResult;
import com.example.tictactoe.service.GameResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GameResultController {

    @Autowired
    private GameResultService gameResultService;

    @PostMapping("/saveResult")
    public GameResult saveGameResult(@RequestBody String winnerName) {
        gameResultService.saveGameResult(winnerName);
    }

    @GetMapping("/recentWinners")
    public List<GameResult> getRecentWins() {
        return gameResultService.getRecentWins();
    }
}
