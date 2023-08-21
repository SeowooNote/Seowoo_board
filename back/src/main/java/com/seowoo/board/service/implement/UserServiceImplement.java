package com.seowoo.board.service.implement;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.seowoo.board.dto.request.user.PatchUserNicknameRequestDto;
import com.seowoo.board.dto.request.user.PatchUserProfileRequestDto;
import com.seowoo.board.dto.response.ResponseDto;
import com.seowoo.board.dto.response.user.GetSignInUserResponseDto;
import com.seowoo.board.dto.response.user.GetUserResponseDto;
import com.seowoo.board.dto.response.user.PatchUserNicknameResponseDto;
import com.seowoo.board.dto.response.user.PatchUserProfileResponseDto;
import com.seowoo.board.entity.UserEntity;
import com.seowoo.board.repository.UserRepository;
import com.seowoo.board.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImplement implements UserService {
     
     private final UserRepository userRepository;

     @Override
     public ResponseEntity<? super GetUserResponseDto> getUser(String email) {
          UserEntity userEntity = null;

          try {

               // description : 이메일에 해당하는 유저 조회 //
               userEntity = userRepository.findByEmail(email);

               // description : 유저 데이터가 존재하는지 확인 //
               if(userEntity == null) return GetUserResponseDto.noExistedUser();

          } catch (Exception exception) {
               exception.printStackTrace();
               return ResponseDto.databaseError();
          }

          return GetUserResponseDto.success(userEntity);
     }

     @Override
     public ResponseEntity<? super GetSignInUserResponseDto> getSignInUser(String email) {
          UserEntity userEntity = null;

          try {

          // description: 이메일로 유저 정보 불러오기 //
          userEntity = userRepository.findByEmail(email);

          // description: 존재하는 유저인지 확인 //
          if (userEntity == null) return GetSignInUserResponseDto.noExistedUser();

          } catch (Exception exception) {
               exception.printStackTrace();
               return ResponseDto.databaseError();
          }

     return GetSignInUserResponseDto.success(userEntity);
     }

     @Override
     public ResponseEntity<? super PatchUserNicknameResponseDto> patchUserNikname(String email, PatchUserNicknameRequestDto dto) {

          String nickname = dto.getNickname();

          try {
               // description : 존재하는 유저인지 확인 //
               UserEntity userEntity = userRepository.findByEmail(email);
               if(userEntity == null) return PatchUserNicknameResponseDto.noExistedUser();
               
               // description : 중복되는 닉네임인지 확인 //
               boolean hasNickname = userRepository.existsByNickname(nickname);
               if(hasNickname) return PatchUserNicknameResponseDto.existedNickname();

               // description : 수정 //
               userEntity.setNickname(nickname);

               // description : 데이터베이스에 저장 //
               userRepository.save(userEntity);

          } catch (Exception exception) {
               exception.printStackTrace();
               return ResponseDto.databaseError();
          }

          return PatchUserNicknameResponseDto.success();

     }

     @Override
     public ResponseEntity<? super PatchUserProfileResponseDto> patchUserProfile(String email, PatchUserProfileRequestDto dto) {
          String profileImageUrl = dto.getProfileImage();
     
          try {
               // description : 존재하는 유저인지 확인 //
               UserEntity userEntity = userRepository.findByEmail(email);
               if(userEntity == null) return PatchUserNicknameResponseDto.noExistedUser();

               // description : 수정 //
               userEntity.setProfileImageUrl(profileImageUrl);

               // description : 데이터베이스에 저장 //
               userRepository.save(userEntity);
               
          } catch (Exception exception) {
               exception.printStackTrace();
               return ResponseDto.databaseError();
          }

          return PatchUserProfileResponseDto.success();
     }
     
}
