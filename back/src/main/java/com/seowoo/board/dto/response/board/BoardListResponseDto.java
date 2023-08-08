package com.seowoo.board.dto.response.board;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class BoardListResponseDto {
     private int boardNumber;
     private String title;
     private String contents;
     private String imageUrl;
     private int viewCount;
     private int commentCount;
     private int favoriteCount;
     private String writeDatetime;
     private String writerProfileImage;
     private String writerNickname;
}
