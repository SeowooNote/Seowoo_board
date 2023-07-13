import './App.css';

// Router
import { Routes, Route, useLocation } from 'react-router-dom';

// layouts import / src : 절대경로
import Header from 'src/layouts/Header';
import Footer from 'src/layouts/Footer';

// views import
import Main from './views/Main';
import Authentication from './views/Authentication';
import Search from './views/Search';
import MyPage from './views/MyPage';
import BoardDetail from './views/Board/Detail';
import BoardWrite from './views/Board/Write';
import BoardUpdate from './views/Board/Update';

// components import
import BoardListItem from './components/BoardListItem';
import Top3ListItem from './components/Top3ListItem';
import CommentListItem from './components/CommentListItem';
import InputBox from './components/InputBox';

// constants import - components 의 InPutBox 에 대한 아이콘
import { INPUT_ICON } from './constants';

// 메인화면 - path: '/' / component : <Main />
// 로그인 / 회원가입 - path: '/authentication' / component : <Authentication />
// 검색 - path: '/search/:searchWord' / component : <Search />
// 마이페이지 - path : '/my-page' / component : <MyPage />
// 게시글 상세 페이지 - path : '/board/detail/:boardNumber' / component : <BoardDetail />
// 게시글 작성 - path : '/board/write' / component : <BoardWrite />
// 게시글 수정 - path : '/board/update/:boardNumber' / component : <BoardUpdate />

function App() {

  // useLocation() : Hooks 함수 / 현재 어디 위치에 있는지 알 수 있음
  const path = useLocation();

  return (
    <>
      {/* Header */}
      <Header />
      
      <Routes>

        {/* 메인화면 */}
        <Route path='/' element={<Main />} />

        {/* 로그인 / 회원가입 */}
        <Route path='/authentication' element={<Authentication />} />

        {/* 검색 */}
        <Route path='/search/:searchWord' element={<Search />} />

        {/* 마이페이지 */}
        <Route path='/my-page' element={<MyPage />} />

        {/* 게시글 관련 */}
        <Route path='/board'>  

          {/* 게시글 상세 페이지 */}
          <Route path='detail/:boardNumber' element={<BoardDetail />} />

          {/* 게시글 작성 */}
          <Route path='write' element={<BoardWrite />} />

          {/* 게시글 수정 */}
          <Route path='update/:boardNumber' element={<BoardUpdate />} />

        </Route>

      </Routes>

      {path.pathname !== '/authentication' && (<Footer />)}
    </>
  );
}

export default App;
