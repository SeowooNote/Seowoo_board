package com.seowoo.board.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seowoo.board.dto.request.authentication.SignInRequestDto;
import com.seowoo.board.dto.request.authentication.SignUpRequestDto;
import com.seowoo.board.dto.response.authentication.SignInResponseDto;
import com.seowoo.board.dto.response.authentication.SignUpResponseDto;
import com.seowoo.board.service.AuthenticationService;

import lombok.RequiredArgsConstructor;
// controller : 인증 컨트롤러 //
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/authentication")
public class AuthenticationController {

     private final AuthenticationService authenticationService;
     
     // API : 회원가입 메서드 //
     @PostMapping("/sign-up")
     public ResponseEntity<? super SignUpResponseDto> singUp(
          @RequestBody @Valid SignUpRequestDto requestBody
     ) {
          ResponseEntity<? super SignUpResponseDto> response = authenticationService.signUp(requestBody);
          return response;
     }

     // API : 로그인 메서드 //
     @PostMapping("/sign-in")
     public ResponseEntity<? super SignInResponseDto> signIn(
          @RequestBody @Valid SignInRequestDto requestBody
     ) {
          ResponseEntity<? super SignInResponseDto> response = authenticationService.signIn(requestBody);
          return response;
     }

}
