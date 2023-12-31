# Seowoo_board
**게시판 만들기 프로젝트입니다.**

# 폴더정리 목록 (개괄식)
|**폴더명**|**설명**|
|--|--|
|**components**|최소 단위의 기능들 모음|
|**layouts**|Header, Footer 관련 레이아웃|
|**views**|실제로 화면에 보여주는 단위 모음|
|**assets**|views 에서 보여주는 것(이미지)|
|**constants**|전역에서 사용하는 상수들 모음|
|**stores**|상태관리 모음|
|**utils**|전역으로 사용하는 함수들 모음|
|**interfaces**|전역으로 사용하는 타입들 모음|
|**hooks**|hook|
|**mocks**|mock 데이터(임시 데이터들) 모음|
|**apis**|api 연결시 사용되는 함수들|

# 폴더정리 세부사항
|**components**|**세부 폴더**|**설명**|
|--|--|--|
||**BoardListItem**|메인, 검색, 마이페이지 화면 상의 최신 게시물의 관려된 기능 및 레이아웃|
||**CommentListItem**|상세페이지 화면 상의 댓글에 관련된 기능 및 레이아웃|
||**InputBox**|로그인 / 회원가입 화면 상의 기능 및 레이아웃|
||**Top3ListItem**|메인 화면 상의 주간 TOP 3 게시글에 관련된 기능 및 레이아웃|

|**layout**|**세부 폴더**|**설명**|
|--|--|--|
||**Header**|화면 레이아웃 상의 Header 부분
||**Footer**|화면 레이아웃 상의 Footer 부분

|**views**|**세부 폴더**|**설명**|
|--|--|--|
||**Authentication**|로그인 및 회원가입 화면
||**Board**|게시물 관련 화면
||**Main**|메인 화면
||**Mypage**|마이 페이지 화면
||**Search**|검색 관련 화면

|**assets**|**세부 폴더**|**설명**|
|--|--|--|

|**stores**|**세부 폴더**|**설명**|
|--|--|--|

|**utils**|**세부 폴더**|**설명**|
|--|--|--|

# To-do
authentication 경로일 때는 안보이도록 작업<br />
완료<br />
mocks 의 commentListItem 에서 writeTime 을 실제 시간을 반영하도록 작업


# 정리
1. react
2. react-r
3. interface
4. hook & store
5. comp
6. util
7. mock
8. constant
9. 기타

# state 순서
1. 라이브러리관련 상태
2. useRef
3. useParams
4. useStore
5. useHook
6. props
7. useState

# event handler 순서
1. changeEvent
2. clickEvent

# effect 순서
1. scope의 갯수(오름차순)
2.
3.

# useNavigate
# useState
# useEffect
# useParams
# map

# 라이브러리 연동 
npm install axios
: axios 는 프론트와 백엔드가 서로 통신하는 것

npm install react-cookie
: F12 -> Application -> cookies

# react 참고 자료 출처 링크
https://tailwindui.com/
https://mui.com/
https://www.framer.com/motion/animation/
https://lottiefiles.com/kr/

https://www.electronjs.org/

https://tauri.app/ko/
: 어려움 / 성능 빠르고 좋음

https://reactnative.dev/

https://nextjs.org/

https://ko.vitejs.dev/guide/
: react 빌드 배포를 빠른 속도로 배포

```
벡엔드로 데이터 전송 => axios(비동기)
	- 회원가입 포맷에 맞춰서
		const data: 타입 = {
			해당 타입의 데이터 1,
			해당 타입의 데이터 2...
		}
		
		axios.post('url', data).then((response) => {
			// todo: 정상 결과, 성공 시 처리
		}).catch((error) => {
			// todo: 실패 결과(try catch 문), 실패 시 처리
		});
		
자바스크립트는 비동기식으로 구성되어 있음

HTTP 요청 메서드 - GET, POST, PUT, PATCH, DELETE, CONNECT...
https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

HTTP 상태 코드(3자리 숫자)
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
	- 1XX(정보) : 요청을 받았으며 프로세스를 계속 진행
	- 2XX(성공) : 요청을 성공적으로 받았으며 인식하고 수용
	- 3XX(리다이렉션) : 클라이언트 요청을 완료하기 위해 추가적인 동작을 취해야 함
	- 4XX(클라이언트 오류) : 클라이언트의 요청에 오류가 있음
	- 5XX(서버 오류) : 서버가 유효한 요청을 처리하는데 실패
```

