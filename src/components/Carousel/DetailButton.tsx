import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  id: string;
  isCurrent: boolean;
}

function DetatilButton({ id, isCurrent }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // TODO: PATH 상수 이용
    navigate(`/galleries/${id}`);
  };

  const isDisabled = id === '' || !isCurrent;

  return (
    <DetailButton disabled={isDisabled} onClick={handleClick}>
      자세히 보기
    </DetailButton>
  );
}

export default DetatilButton;

const DetailButton = styled.button`
  outline: none;
  width: fit-content;
  border-radius: 15px;
  padding: 8px 28px;
  margin-left: 15px;
  margin-top: 15px;
  border: 1px solid white;

  &:hover:not([disabled]) {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid white;
    color: white;
  }
`;
