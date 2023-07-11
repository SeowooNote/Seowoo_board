// Router
import { Routes, Route } from 'react-router-dom';

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

import './App.css';

// 메인화면 - path: '/' / component : <Main />
// 로그인 / 회원가입 - path: '/authentication' / component : <Authentication />
// 검색 - path: '/search/:searchWord' / component : <Search />
// 마이페이지 - path : '/my-page' / component : <MyPage />
// 게시글 상세 페이지 - path : '/board/detail/:boardNumber' / component : <BoardDetail />
// 게시글 작성 - path : '/board/write' / component : <BoardWrite />
// 게시글 수정 - path : '/board/update/:boardNumber' / component : <BoardUpdate />

function App() {
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

      {/* Footer */}
      {/* TODO : authentication 경로일 때는 안보이도록 작업 */}
      <Footer />
    </>
  );
}

export default App;
