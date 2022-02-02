import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkURL: string;
  isCurrent: boolean;
}

function DetatilButton({ linkURL, isCurrent }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/galleries/${linkURL}`);
  };

  return (
    <DetailButton disabled={!isCurrent} onClick={handleClick}>
      자세히 보기
    </DetailButton>
  );
}

export default DetatilButton;

const DetailButton = styled.button`
  outline: none;
  width: fit-content;
  border-radius: 15px;
  border: 1px solid white;
  padding: 8px 28px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid white;
    color: white;
  }
`;
