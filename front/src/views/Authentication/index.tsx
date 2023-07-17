import React, { useState } from 'react';
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON, eamilPattern, telnumberPattern } from 'src/constants';
import { signInMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';

// 링크 주소 : https://www.npmjs.com/package/react-daum-postcode
// Daum 우편번호 검색 서비스 import
import { useDaumPostcodePopup, Address } from 'react-daum-postcode';




export default function Authentication() {
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  const navigator = useNavigate();

  const SignInCard = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }

    const onSignUpClickHandler = () => {
      setView('sign-up');
    }

    const onSignInButtonClickHandler = () => {
      if(email !== signInMock.email || password !== signInMock.password){
        setError(true);
        return;
      }
      navigator('/');
    }

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

  const SignUpCard = () => {
    const open = useDaumPostcodePopup();

    const [page, setPage] = useState<1 | 2>(2);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

    const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
    const [emailDuplicationError, setEmailDuplicationError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordCheckError, setPasswordCheckError] =useState<boolean>(false);

    const [nicknameError, setNickNameError] = useState<boolean>(false);
    const [telNumberError, setTelNumberError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck]  = useState<string>('');

    const [nickname, setNickname]  = useState<string>('');
    const [telNumber, setTelNumber]  = useState<string>('');
    const [address, setAddress]  = useState<string>('');
    const [addressDetail, setAddressDetail]  = useState<string>('');

    const onPasswordIconClickHandler = () => {
      setShowPassword(!showPassword);
    }

    const onPasswordCheckIconClickHandler = () => {
      setShowPasswordCheck(!showPasswordCheck);
    }

    const onAddressIconClickHandler = () => {
      open({ onComplete });
    }

    const onComplete = (data: Address) => {
      const address = data.address;
      setAddress(address);
    }

    const onButtonClickHandler = () => {
      if(page === 1) checkPage1();
      if(page === 2) checkPage2();
    }

    const onSignInClickHandler = () => {
      setView('sign-in');
    }

    const checkPage1 = () => {
      const emailPatternFlag = !eamilPattern.test(email);
      const passwordFlag = password.length < 8;
      const passwordCheckFlag = password !== passwordCheck;

      setEmailPatternError(emailPatternFlag);
      setPasswordError(passwordFlag);
      setPasswordCheckError(passwordCheckFlag);

      if(!emailPatternFlag && !passwordError && !passwordCheckError) setPage(2);
    }

    const checkPage2 = () => {
      const telNumberFlag = !telnumberPattern.test(telNumber);

      setTelNumberError(telNumberFlag);
      setNickNameError(!nickname);
      setAddressError(!address);

      if(!telNumberFlag && nickname && address) setView('sign-in');
    }

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
