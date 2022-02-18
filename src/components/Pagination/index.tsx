import styled, { css } from 'styled-components';
import Arrow from '../../assets/icons/Arrow_777777.png';
import Arrows from '../../assets/icons/Arrows_777777.png';

function getPageNumbers(currPage: number, pageCount: number) {
  // 페이지네이션 숫자 버튼 목록을 리턴하는 함수를 작성하세요.
  const resultPages = [];
  resultPages.push(currPage);

  const MAX_PAGE = 5;

  let idx = 1;
  while (resultPages.length < MAX_PAGE) {
    if (currPage + idx < pageCount) resultPages.push(currPage + idx);
    if (currPage - idx > -1) resultPages.unshift(currPage - idx);
    idx += 1;
    if (idx > MAX_PAGE) break;
  }
  return resultPages;
}

interface PaginationProps {
  currPage: number;
  pageCount: number;
  onClickPage: (arg0: number) => void;
}

function Pagination({ currPage = 0, pageCount, onClickPage }: PaginationProps) {
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
            onClick={() => onClickPage(page)}
          >
            {page + 1}
          </NumberButton>
        );
      })}
      <ArrowButton
        disabled={currPage === pageCount - 1}
        onClick={() => onClickPage(currPage + 1)}
      >
        <ArrowImg src={Arrow} alt="/" flip />
      </ArrowButton>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  margin: 24px auto;
  justify-content: center;
`;

const ArrowImg = styled.img<{ flip: boolean }>`
  width: 20px;
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
  width: 20px;
  border: none;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: #ff6e00;
    `}
`;

const ArrowButton = styled.button`
  display: block;
  padding: 0;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
