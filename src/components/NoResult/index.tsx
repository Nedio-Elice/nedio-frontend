import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { noResults } from '../../constants/images';
import { PATH } from '../../constants/path';

interface Props {
  title: string;
  isHall?: boolean;
}

function NoResult({ title, isHall = false }: Props) {
  const navigation = useNavigate();
  const handleClick = () => navigation(`${PATH.MAIN}`, { replace: true });

  return (
    <NoResultsWrapper>
      <NoResultsImg src={noResults} />
      <NoResultsTitle>{title}</NoResultsTitle>
      {isHall && <GotoButton onClick={handleClick}>홈으로</GotoButton>}
    </NoResultsWrapper>
  );
}

export default NoResult;

const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const NoResultsImg = styled.img`
  width: 450px;
  height: 450px;
`;

const NoResultsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const GotoButton = styled.button`
  margin-top: 10px;
  padding: 15px 25px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #1f3e5a;
  color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
