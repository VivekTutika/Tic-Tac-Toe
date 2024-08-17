package com.example.tictactoe.service;

import com.example.tictactoe.model.GameResult;
import com.example.tictactoe.repository.GameResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class GameResultService {

    @Autowired
    private GameResultRepository gameResultRepository;

    public GameResult saveGameResult(String winnerName) {
        GameResult gameResult = new GameResult();
        gameResult.setWinner(winnerName);
        gameResult.setGameDate(LocalDateTime.now());
        gameResultRepository.save(gameResult);
    }

    public List<GameResult> getRecentWins() {
        return gameResultRepository.findTop10ByOrderByWinTimestampDesc();
    }
}
