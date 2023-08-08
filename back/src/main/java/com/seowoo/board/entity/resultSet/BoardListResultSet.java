package com.seowoo.board.entity.resultSet;

public interface BoardListResultSet {
     int getBoardNumber();
     String getTitle();
     String getContents();
     String getImageUrl();
     int getViewCount();
     int getCommenCount();
     int getFavoriteCount();
     String getWriteDatetime();
     String getWriterProfileImage();
     String getWriterNickname();
}
