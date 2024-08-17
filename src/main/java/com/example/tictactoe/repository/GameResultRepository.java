package com.example.tictactoe.repository;

import com.example.tictactoe.model.GameResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameResultRepository extends JpaRepository<GameResult, Long> {
    
    @Query("SELECT gr FROM GameResult gr ORDER BY gr.timestamp DESC")
    List<GameResult> findTop10ByOrderByTimestampDesc();
}

