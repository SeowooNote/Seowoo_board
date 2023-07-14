import React, { useState } from 'react';
import './style.css';
import InputBox from 'src/components/InputBox';
import { INPUT_ICON } from 'src/constants';

export default function Authentication() {
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  const SignInCard = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const onPasswordIconClickHandler = () => {
      setShowPassword(!setShowPassword);
    }

    const onSignUpClickHandler = () => {
      setView('sign-up');
    }

    return(
      <div className="authentication-card">
        <div className="authentication-card-top">
          <div className="authentication-card-top-text-container">
            <div className="authentication-card-top-text">로그인</div>
          </div>
          <div className="authentication-card-top-input-container">
            <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요' error = {error}/>
            <InputBox label='비밀번호' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={error}/>
          </div>
        </div>
        <div className="authentication-card-bottom">
          { error && (
                      <div className='authentication-card-bottom-error-message'>   
                        {`이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`}
                      </div>
          ) }
          <div className="authentication-card-bottom-button">로그인</div>
          <div className="authentication-card-bottom-text">
            신규 사용자이신가요? <span className="authentication-emphasis" onClick={onSignUpClickHandler}>회원가입</span>
          </div>
        </div>
      </div>
    );
  }

  const SignUpCard = () => {
    const [page, setPage] = useState<1 | 2>(1);
    const [showPassword, setPassword] = useState<boolean>(false);
    const [showPasswordCheck, setPasswordCheck] = useState<boolean>(false);

    const [emailPatternError, setEmailPatternError] = useState<boolean>(false);
    const [emailDuplicationError, setEmailDuplicationError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordCheckError, setPasswordCheckError] =useState<boolean>(false);

    const [nicknameError, setNickNameError] = useState<boolean>(false);
    const [telNumberError, setTelNumberError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);

    const onPasswordIconClickHandler = () => {
      setPassword(!setPassword);
    }

    const onPasswordCheckIconClickHandler = () => {
      setPasswordCheck(!setPasswordCheck);
    }

    const onButtonClickHandler = () => {
      if (page === 1) setPage(2);
      else setPage(1);
    }

    const onSignInClickHandler = () => {
      setView('sign-in');
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
                                <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요' error={emailPatternError || emailDuplicationError} helper={emailPatternError ? '이메일 주소 포맷이 맞지 않습니다.' : emailDuplicationError ? '중복되는 이메일 주소 입니다.' : ''} />
                                <InputBox label='비밀번호*' type={showPassword ? 'text' : 'password'} placeholder='비밀번호를 입력해주세요' icon={showPassword ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordIconClickHandler} error={passwordError} helper={passwordError ? '비밀번호는 8자 이상 입력해주세요.' : ''} />
                                <InputBox label='비밀번호 확인*' type={showPasswordCheck ? 'text' : 'password'} placeholder='비밀번호를 다시 입력해주세요' icon={showPasswordCheck ? INPUT_ICON.ON : INPUT_ICON.OFF} buttonHandler={onPasswordCheckIconClickHandler} error={passwordCheckError} helper={passwordCheckError ? '비밀번호가 일치하지 않습니다.' : ''} />
                              </>
                            ) : (
                              <>
                                <InputBox label='닉네임*' type='text' placeholder='넥네임을 입력해주세요' error={nicknameError} helper={nicknameError ? '닉네임을 입력해주세요.' : ''} />
                                <InputBox label='핸드폰 번호*' type='text' placeholder='해드폰 번호를 입력해주세요' error={telNumberError} helper={telNumberError ? '숫자만 입력해주세요.' : ''} />
                                <InputBox label='주소*' type='text' placeholder='우편번호 찾기' icon={INPUT_ICON.ARROW} error={addressError} helper={addressError ? '우편번호를 선택해주세요.' : ''} />
                                <InputBox label='상세 주소*' type='text' placeholder='상세 주소를 입력해주세요' />
                              </>)
            }
          </div>
        </div>
        <div className="authentication-card-bottom">
          <div className="authentication-card-bottom-button" onClick={onButtonClickHandler}>
            { page === 1 ? '다음 단계' : '회원가입' }
          </div>
          <div className="authentication-card-bottom-text">이미 계정이 있으신가요? 
            <span className='authentication-emphasis-login' onClick={onSignInClickHandler}> 로그인</span>
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
