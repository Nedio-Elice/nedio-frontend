import styled from 'styled-components';
import HallAddForm from './HallAddForm';

const Container = styled.div`
  width: 100%;
`;

interface HallProps {
  id: number;
  name: string;
}

interface Props {
  halls: HallProps[];
  onChangeHallName: (prameter: HallProps) => void;
  onClickDeleteHallButton: (id: number) => void;
}

function Halls({ halls, onChangeHallName, onClickDeleteHallButton }: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, name }) => {
            return (
              <HallAddForm
                key={id}
                id={id}
                name={name}
                onChangeHallName={onChangeHallName}
                onClickDeleteHallButton={onClickDeleteHallButton}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
    </Container>
  );
}

export default Halls;
