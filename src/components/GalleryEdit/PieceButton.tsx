import styled from 'styled-components';

interface Props {
  isUpdated: boolean;
  openModal: () => void;
}

const Button = styled.button`
  margin-right: 1em;
  padding: 0.3em;
  background: none;
  border-radius: 0.5em;
  cursor: pointer;
  white-space: pre-wrap;
`;

function PieceButton({ openModal, isUpdated }: Props) {
  return (
    <Button type="button" onClick={openModal}>
      {isUpdated ? '등록\n완료' : '작품\n등록'}
    </Button>
  );
}

export default PieceButton;
