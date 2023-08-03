package com.seowoo.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.seowoo.board.dto.request.authentication.SignInRequestDto;
import com.seowoo.board.dto.request.authentication.SignUpRequestDto;
import com.seowoo.board.dto.response.authentication.SignInResponseDto;
import com.seowoo.board.dto.response.authentication.SignUpResponseDto;
import com.seowoo.board.service.AuthenticationService;

@Service
public class AuthenticationServiceImplement implements AuthenticationService {

     @Override
     public ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'signIn'");
     }

     @Override
     public ResponseEntity<? super SignUpResponseDto> signUp(SignUpRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'signUp'");
     }
     
}
