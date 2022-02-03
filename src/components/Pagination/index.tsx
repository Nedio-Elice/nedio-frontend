import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Arrow from '../../assets/icons/Arrow_777777.png';
import Arrows from '../../assets/icons/Arrows_777777.png';

function getPageNumbers(currPage: number, pageCount: number) {
  // 페이지네이션 숫자 버튼 목록을 리턴하는 함수를 작성하세요.
  const resultPages = [];
  resultPages.push(currPage);

  let idx = 1;
  while (resultPages.length < 5) {
    if (currPage + idx < pageCount) resultPages.push(currPage + idx);
    if (currPage - idx > -1) resultPages.unshift(currPage - idx);
    idx += 1;
  }
  return resultPages;
}

interface PaginationProps {
  currPage: number;
  pageCount: number;
  onClickPage: (arg0: number) => void;
}

function Pagination({
  currPage = 0,
  pageCount = 5,
  onClickPage,
}: PaginationProps) {
  return (
    <Container>
      <ArrowButton
        disabled={currPage === 0}
        onClick={() => onClickPage(currPage - 1)}
      >
        <ArrowImg src={Arrow} flip={false} />
      </ArrowButton>
      {getPageNumbers(currPage, pageCount).map((page) => {
        return (
          <NumberButton
            key={`pagination-button-${page}`}
            active={currPage === page}
          >
            {page + 1}
          </NumberButton>
        );
      })}
      <ArrowButton
        disabled={currPage === pageCount - 1}
        onClick={() => onClickPage(currPage + 1)}
      >
        <ArrowImg src={Arrow} flip />
      </ArrowButton>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  margin: 24px auto;
`;

const ArrowImg = styled.img<{ flip: boolean }>`
  alt: '/';
  width: 16px;
  ${(props) =>
    props.flip &&
    css`
      transform: scaleX(-1);
    `}
`;

const NumberButton = styled.button<{ active: boolean }>`
  type: button;
  margin: 0 4px;
  padding: 0;
  width: 16px;
  border: none;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  background-color: transparent;
  ${(props) =>
    props.active &&
    css`
      color: #ff6e00;
    `}
`;

const ArrowButton = styled.button`
  display: block;
  padding: 0;
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
`;
