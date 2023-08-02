package com.seowoo.board.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seowoo.board.dto.request.authentication.SignInRequestDto;
import com.seowoo.board.dto.request.authentication.SignUpRequestDto;
import com.seowoo.board.dto.response.authentication.SignInResponseDto;
import com.seowoo.board.dto.response.authentication.SignUpResponseDto;

// controller : 인증 컨트롤러 //
@RestController
@RequestMapping("/api/v1/authentication")
public class AuthenticationController {
     
     // API : 회원가입 메서드 //
     @PostMapping("/sign-up")
     public ResponseEntity<SignUpResponseDto> singUp(
          @RequestBody @Valid SignUpRequestDto requestBody
     ) {
          SignUpResponseDto response = SignUpResponseDto.existedEmail();
          return ResponseEntity.status(HttpStatus.OK).body(response);
     }

     // API : 로그인 메서드 //
     @PostMapping("/sign-in")
     public ResponseEntity<? super SignInResponseDto> signIn(
          @RequestBody @Valid SignInRequestDto requestBody
     ) {
          SignInResponseDto response = SignInResponseDto.success("abc");
          return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response);
     }

}
