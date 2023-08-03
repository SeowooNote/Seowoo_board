package com.seowoo.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.seowoo.board.dto.request.user.PatchUserNicknameRequestDto;
import com.seowoo.board.dto.request.user.PatchUserProfileRequestDto;
import com.seowoo.board.dto.response.user.PatchUserNicknameResponseDto;
import com.seowoo.board.dto.response.user.PatchUserProfileResponseDto;
import com.seowoo.board.service.UserService;

@Service
public class UserServiceImplement implements UserService {

     @Override
     public ResponseEntity<?> getUser(String email) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getUser'");
     }

     @Override
     public ResponseEntity<?> getSignInUser() {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'getSignInUser'");
     }

     @Override
     public ResponseEntity<? super PatchUserNicknameResponseDto> patchUserNikname(String email,
               PatchUserNicknameRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'patchUserNikname'");
     }

     @Override
     public ResponseEntity<PatchUserProfileResponseDto> patchUserProfile(String email, PatchUserProfileRequestDto dto) {
          // TODO Auto-generated method stub
          throw new UnsupportedOperationException("Unimplemented method 'patchUserProfile'");
     }
     
}
