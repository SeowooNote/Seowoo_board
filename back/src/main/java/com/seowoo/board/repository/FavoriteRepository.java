package com.seowoo.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seowoo.board.entity.FavoriteEntity;
import com.seowoo.board.entity.pk.FavoritePk;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePk> {
     
}
