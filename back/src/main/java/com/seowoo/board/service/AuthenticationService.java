package com.seowoo.board.service;

import org.springframework.http.ResponseEntity;

import com.seowoo.board.dto.request.authentication.SignInRequestDto;
import com.seowoo.board.dto.request.authentication.SignUpRequestDto;
import com.seowoo.board.dto.response.authentication.SignInResponseDto;
import com.seowoo.board.dto.response.authentication.SignUpResponseDto;

public interface AuthenticationService {
     // method : 로그인 메서드 //
     ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);

     // method : 회원가입 메서드 //
     ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto);
}
