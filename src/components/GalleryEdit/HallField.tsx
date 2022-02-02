import styled from 'styled-components';
import HallAddInterface from './HallAddInterface';

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
}

function HallField({ halls, onChangeHallName }: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, name }) => {
            return (
              <HallAddInterface
                key={id}
                id={id}
                name={name}
                onChangeHallName={onChangeHallName}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
    </Container>
  );
}

export default HallField;
