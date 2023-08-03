package com.seowoo.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.seowoo.board.dto.request.board.PatchBoardRequestDto;
import com.seowoo.board.dto.request.board.PostBoardRequestDto;
import com.seowoo.board.dto.request.board.PostCommentRequestDto;
import com.seowoo.board.dto.request.board.PutFavoriteRequestDto;
import com.seowoo.board.dto.response.board.DeleteBoardResponseDto;
import com.seowoo.board.dto.response.board.PatchBoardResponseDto;
import com.seowoo.board.dto.response.board.PostBoardResponseDto;
import com.seowoo.board.dto.response.board.PostCommentResponseDto;
import com.seowoo.board.dto.response.board.PutFavoriteResponseDto;
import com.seowoo.board.service.BoardService;

@Service
public class BoardServiceImplement implements BoardService {

     @Override
     public ResponseEntity<?> getTop3() {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getTop3'");
     }

     @Override
     public ResponseEntity<?> getCurrent() {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getCurrent'");
     }

     @Override
     public ResponseEntity<?> getBoard(Integer boardNumber) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getBoard'");
     }

     @Override
     public ResponseEntity<?> getSearchBoardList(String searchWord) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getSearchBoardList'");
     }

     @Override
     public ResponseEntity<?> getFavoriteList(Integer boardNumber) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getFavoriteList'");
     }

     @Override
     public ResponseEntity<?> getCommentList(Integer boardNumber) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getCommentList'");
     }

     @Override
     public ResponseEntity<?> getUserList(String email) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getUserList'");
     }

     @Override
     public ResponseEntity<? super PostBoardResponseDto> postBoard(PostBoardRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'postBoard'");
     }

     @Override
     public ResponseEntity<? super PostCommentResponseDto> postComment(Integer boardNumber, PostCommentRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'postComment'");
     }

     @Override
     public ResponseEntity<? super PutFavoriteResponseDto> putFavorite(Integer boardNumber, PutFavoriteRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'putFavorite'");
     }

     @Override
     public ResponseEntity<? super PatchBoardResponseDto> patchBoard(Integer boardNumber, PatchBoardRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'patchBoard'");
     }

     @Override
     public ResponseEntity<? super DeleteBoardResponseDto> deleteBoard(Integer boardNumber, String email) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'deleteBoard'");
     }
     
}
