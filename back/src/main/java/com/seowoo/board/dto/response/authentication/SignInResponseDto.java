package com.seowoo.board.dto.response.authentication;

import com.seowoo.board.common.response.ResponseCode;
import com.seowoo.board.common.response.ResponseMessage;
import com.seowoo.board.dto.response.ResponseDto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SignInResponseDto extends ResponseDto {
     private String token;

     private SignInResponseDto(String code, String message, String token){
          super(code, message);
          this.token = token;
     }

     public static SignInResponseDto success(String token) {
          SignInResponseDto result = new SignInResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, token);
          return result;
     }

     public static ResponseDto signInDataMismatch() {
          ResponseDto result = new ResponseDto(ResponseCode.SIGN_IN_FAIL, ResponseMessage.SIGN_IN_FAIL);
          return result;
     }
}
