import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DetailButton = styled.button`
  outline: none;
  width: fit-content;
  border-radius: 15px;
  border: none;
  padding: 10px 30px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;

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
