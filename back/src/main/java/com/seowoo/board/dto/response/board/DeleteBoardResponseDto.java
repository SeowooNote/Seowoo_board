package com.seowoo.board.dto.response.board;

import com.seowoo.board.common.response.ResponseCode;
import com.seowoo.board.common.response.ResponseMessage;
import com.seowoo.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DeleteBoardResponseDto extends ResponseDto {
     private DeleteBoardResponseDto(String code, String message) {
          super(code, message);
     }

     public static DeleteBoardResponseDto success() {
          DeleteBoardResponseDto result = new DeleteBoardResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS);
          return result;
     }

     public static ResponseDto noExistedUser() {
          ResponseDto result = new ResponseDto(ResponseCode.NO_EXISTED_USER, ResponseMessage.NO_EXISTED_USER);
          return result;
     }

     public static ResponseDto noExistedBoard() {
          ResponseDto result = new ResponseDto(ResponseCode.NO_EXISTED_BOARD, ResponseMessage.NO_EXISTED_BOARD);
          return result;
     }

     public static ResponseDto noPermission() {
          ResponseDto result = new ResponseDto(ResponseCode.NO_PERMISSION, ResponseMessage.NO_PERMISSION);
          return result;
     }
}
