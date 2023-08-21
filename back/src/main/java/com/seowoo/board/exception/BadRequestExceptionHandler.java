package com.seowoo.board.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.seowoo.board.common.response.ResponseCode;
import com.seowoo.board.common.response.ResponseMessage;
import com.seowoo.board.dto.response.ResponseDto;

@RestControllerAdvice
public class BadRequestExceptionHandler {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ResponseDto> methodArgumentNotValidExceptionHandler(MethodArgumentNotValidException exception) {
    exception.printStackTrace();
    ResponseDto result = new ResponseDto(ResponseCode.VALIDATE_FAIL, ResponseMessage.VALIDATE_FAIL);
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
  }

}