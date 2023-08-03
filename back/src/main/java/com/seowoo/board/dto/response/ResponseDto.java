package com.seowoo.board.dto.response;

import com.seowoo.board.common.response.ResponseCode;
import com.seowoo.board.common.response.ResponseMessage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseDto {
     private String code;
     private String message;

     public static ResponseDto databaseError() {
          ResponseDto result = new ResponseDto(ResponseCode.DATABASE_ERROR, ResponseMessage.DATABASE_ERROR);
          return result;
     }
}
