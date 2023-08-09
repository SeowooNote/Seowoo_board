package com.seowoo.board.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seowoo.board.entity.BoardViewEntity;

@Repository
public interface BoardViewRespository extends JpaRepository<BoardViewEntity, Integer> {
     BoardViewEntity findByBoardNumber(Integer boardNumber);

     List<BoardViewEntity> findTop3ByOrderByFavoriteCountDesc();
     List<BoardViewEntity> findByTitleContainsOrContentsContainsOrderByWriteDatetimeDesc(String title, String contents);
     List<BoardViewEntity> findByWriterEmailOrderByWriteDatetimeDesc(String email);
     
}
