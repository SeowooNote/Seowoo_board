import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 링크 주소 : https://www.npmjs.com/package/react-daum-postcode
// Daum 우편번호 검색 서비스 import
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';

import { useUserStore } from 'src/stores';
import InputBox from 'src/components/InputBox';
import { signInMock, userMock } from 'src/mocks';
import { INPUT_ICON, eamilPattern, telnumberPattern } from 'src/constants';

import './style.css';

//            component            //
// description : 인증 화면 컴포넌트 //
export default function Authentication() {

  //                   state                   //
  // description : 로그인 혹은 회원가입 뷰 상태 //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  //                   function                    //
  // description : 페이지 이동을 위한 네비게이트 함수 //
  const navigator = useNavigate();

  // event handler //

  //            component              //
  // description : 로그인 카드 컴포넌트 //
  const SignInCard = () => {

    //               state                //
    // description : 로그인 유저 정보 상태 //
    const { setUser } = useUserStore();
    // description : 비밀번호 Input 타입 상태 //
    const [showPassword, setShowPassword] = useState<boolean>(false);
    // description : 로그인 Error 상태 //
    const [error, setError] = useState<boolean>(false);
    // description : 이메일 입력값 상태 //
    const [email, setEmail] = useState<string>(signInMock.email);
    // description : 비밀번호 입력값 상태 //
    const [password, setPassword] = useState<string>(signInMock.password);

    // function //

    //                  event handler                   //
    // description : 비밀번호 타입 변경 버튼 클릭 이벤트  //
    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }
    // description : 회원가입 이동 클릭 이벤트 //
    const onSignUpClickHandler = () => {
      setView('sign-up');
    }
    // description : 로그인 버튼 클릭 이벤트 //
    const onSignInButtonClickHandler = () => {
      if(email !== signInMock.email || password !== signInMock.password){
        setError(true);
        return;
      }
      setUser(userMock);
      navigator('/');
    }

    // component //

    // effect //

    // render //
    return(
      <div className="authentication-card">
        <div className="authentication-card-top">
          <div className="authentication-card-top-text-container">
            <div className="authentication-card-top-text">로그인</div>
          </div>
          <div className="authentication-card-top-input-container">
            <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요' error = {error} value={email} setValue={setEmail} />
            <InputBox label='비밀번호' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={error} value={password} setValue={setPassword} />
          </div>
        </div>
        <div className="authentication-card-bottom">
          { error && (
                      <div className='authentication-card-bottom-error-message'>   
                        {`이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`}
                      </div>
          ) }
          <div className="authentication-card-bottom-button" onClick={onSignInButtonClickHandler}>로그인</div>
          <div className="authentication-card-bottom-text">
            신규 사용자이신가요? <span className="authentication-emphasis" onClick={onSignUpClickHandler}>회원가입</span>
          </div>
        </div>
      </div>
    );
  }

  //              component             //
  // description : 회원가입 카드 컴포넌트 //
  const SignUpCard = () => {

    //                      state                      //
    // description : 다음 포스트 (우편번호검색) 팝업 상태 //
    const open = useDaumPostcodePopup();
    // description : 회원가입 카드 페이지 상태 //
    const [page, setPage] = useState<1 | 2>(2);
    // description : 비밀번호 Input 타입 상태 //
    const [showPassword, setShowPassword] = useState<boolean>(false);
    // description : 비밀번호 확인 Input 타입 상태 //
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
    // description : 이메일 패턴 에러 상태 //
    const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
    // description : 이메일 중복 에러 상태 //
    const [emailDuplicationError, setEmailDuplicationError] = useState<boolean>(false);
    // description : 비밀번호 길이 에러 상태 //
    const [passwordError, setPasswordError] = useState<boolean>(false);
    // description : 비밀번호 확인 에러 상태 //
    const [passwordCheckError, setPasswordCheckError] =useState<boolean>(false);
    // description : 닉네임 에러 상태 //
    const [nicknameError, setNickNameError] = useState<boolean>(false);
    // description : 휴대전화번호 패턴 에러 상태 //
    const [telNumberError, setTelNumberError] = useState<boolean>(false);
    // description : 주소 에러 상태 //
    const [addressError, setAddressError] = useState<boolean>(false);
    // description : 이메일 입력값 상태 //
    const [email, setEmail] = useState<string>('');
    // description : 비밀번호 입력값 상태 //
    const [password, setPassword] = useState<string>('');
    // description : 비밀번호 확인 입력값 상태 //
    const [passwordCheck, setPasswordCheck]  = useState<string>('');
    // description : 닉네임 입력값 상태 //
    const [nickname, setNickname]  = useState<string>('');
    // description : 휴대전화번호 입력값 상태 //
    const [telNumber, setTelNumber]  = useState<string>('');
    // description : 주소 입력값 상태 //
    const [address, setAddress]  = useState<string>('');
    // description : 상세주소 입력값 상태 //
    const [addressDetail, setAddressDetail]  = useState<string>('');

    //                           function                           //
    // description : check 페이지 1 에서 페이지 2 로 이동 시 검증 함수 //
    const checkPage1 = () => {
      const emailPatternFlag = !eamilPattern.test(email);
      const passwordFlag = password.length < 8;
      const passwordCheckFlag = password !== passwordCheck;

      setEmailPatternError(emailPatternFlag);
      setPasswordError(passwordFlag);
      setPasswordCheckError(passwordCheckFlag);

      if(!emailPatternFlag && !passwordError && !passwordCheckError) setPage(2);
    }
    // description : check 페이지 2 에서 회원가입 시 검증 함수 //
    const checkPage2 = () => {
      const telNumberFlag = !telnumberPattern.test(telNumber);

      setTelNumberError(telNumberFlag);
      setNickNameError(!nickname);
      setAddressError(!address);

      if(!telNumberFlag && nickname && address) setView('sign-in');
    }

    //                  event handler                  //
    // description : 비밀번호 타입 변경 버튼 클릭 이벤트 //
    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }
    // description : 비밀번호 확인 타입 변경 버튼 클릭 이벤트 //
    const onPasswordCheckIconClickHandler = () => {
      setShowPasswordCheck(!showPasswordCheck);
    }
    // description : 주소 검색(조회) 버튼 클릭 이벤트 //
    const onAddressIconClickHandler = () => {
      open({ onComplete });
    }
    // description : 다음 혹은 회원가입 버튼 클릭 이벤트 //
    const onButtonClickHandler = () => {
      if(page === 1) checkPage1();
      if(page === 2) checkPage2();
    }
    // description : 로그인 이동 버튼 클릭 이벤트 //
    const onSignInClickHandler = () => {
      setView('sign-in');
    }
    // description : 주소 검색 완료 이벤트 //
    const onComplete = (data: Address) => {
      const address = data.address;
      setAddress(address);
    }

    // effect //

    // render //
    return(
      <div className="authentication-card">
        <div className="authentication-card-top">
          <div className="authentication-card-top-text-container">
            <div className="authentication-card-top-text">회원가입</div>
            <div className="authentication-card-top-text-opacity">{`${page}/2`}</div>
          </div>
          <div className="authentication-card-top-input-container">
            {
              page === 1 ? (
                              <>
                                <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요' error={emailPatternError || emailDuplicationError} helper={emailPatternError ? '이메일 주소 포맷이 맞지 않습니다.' : emailDuplicationError ? '중복되는 이메일 주소 입니다.' : ''} value={email} setValue={setEmail} />
                                <InputBox label='비밀번호*' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={passwordError} helper={passwordError ? '비밀번호는 8자 이상 입력해주세요.' : ''} value={password} setValue={setPassword} />
                                <InputBox label='비밀번호 확인*' type={showPasswordCheck ? 'text' : 'password'} placeholder='비밀번호를 다시 입력해주세요' icon={showPasswordCheck ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordCheckIconClickHandler} error={passwordCheckError} helper={passwordCheckError ? '비밀번호가 일치하지 않습니다.' : ''} value={passwordCheck} setValue={setPasswordCheck} />
                              </>
                            ) : (
                              <>
                                <InputBox label='닉네임*' type='text' placeholder='넥네임을 입력해주세요' error={nicknameError} helper={nicknameError ? '닉네임을 입력해주세요.' : ''} value={nickname} setValue={setNickname} />
                                <InputBox label='핸드폰 번호*' type='text' placeholder='해드폰 번호를 입력해주세요' error={telNumberError} helper={telNumberError ? '숫자만 입력해주세요.' : ''} value={telNumber} setValue={setTelNumber} />
                                <InputBox label='주소*' type='text' placeholder='우편번호 찾기' icon={INPUT_ICON.ARROW} error={addressError} helper={addressError ? '우편번호를 선택해주세요.' : ''} value={address} setValue={setAddress} buttonHandler={onAddressIconClickHandler} />
                                <InputBox label='상세 주소*' type='text' placeholder='상세 주소를 입력해주세요' value={addressDetail} setValue={setAddressDetail} />
                              </>)
            }
          </div>
        </div>
        <div className="authentication-card-bottom">
          <div className="authentication-card-bottom-button" onClick={onButtonClickHandler}>
            { page === 1 ? '다음 단계' : '회원가입' }
          </div>
          <div className="authentication-card-bottom-text">이미 계정이 있으신가요?&nbsp;
            <span className='authentication-emphasis-login' onClick={onSignInClickHandler}>로그인</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id='authentication-wrapper'>
      <div className='authentication-left'>
        <div className="authentication-left-icon"></div>
        <div className="authentication-left-text-container">
          <div className='authentication-left-text'>환영합니다.</div>
          <div className='authentication-left-text'>Seowoo's Board 입니다.</div>
        </div>
      </div>
      <div className='authentication-right'>
        {view === 'sign-in' ? (<SignInCard />) : (<SignUpCard />)}
      </div>
    </div>
  );
}
