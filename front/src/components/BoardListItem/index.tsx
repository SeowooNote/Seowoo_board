import React from 'react';
import './style.css';
import { boardListItemMock } from 'src/mocks';
import { useNavigate } from 'react-router-dom';
import { CurrentListResponseDTO, MyPageListResponseDto, SearchListResponseDto } from 'src/interfaces/response';

interface Props{
  item: CurrentListResponseDTO | SearchListResponseDto | MyPageListResponseDto;
}

export default function BoardListItem({ item }: Props) {
  const { boardNumber, boardTitle, boardContent, boardImage } = item;
  const { writerProfileImage, writerNickName, writeDate } = item;
  const { commentCount, likeCount, viewCount } = item;

  // useNavigate() : 자바스크립트 로직 중에 페이지 이동을 시켜주는 훅 함수 (Hooks)
  const navigator = useNavigate();

  // 페이지 이동 함수
  const onClickHandler = () => {
    navigator(`/board/detail/${boardNumber}`);
  }

  return (
    <div className='board-list-item-box' onClick={ onClickHandler }>
      <div className='board-list-left'>
        <div className="board-list-item-writer">
            <div className="board-list-item-profile">
              <div className="board-list-item-profile-image"
                   style={{ backgroundImage: `url(${writerProfileImage})` }}>
              </div>
            </div>
            <div className="board-list-item-writer-right">
              <div className="board-list-item-writer-nickname">{ writerNickName }</div>
              <div className="board-list-item-write-date">{ writeDate }</div>
            </div>
        </div>
        <div className="board-list-item-title">{ boardTitle }</div>
        <div className="board-list-item-content">{ boardContent }</div>
        <div className="board-list-item-count">{ `댓글 ${commentCount} · 좋아요 ${likeCount} · 조회수 ${viewCount}` }</div>
      </div>
      <div className='board-list-right'>
        <div className="board-list-item-board-image"
             style={{ backgroundImage: `url(${boardImage})` }}></div>
      </div>
    </div>
  );
}
