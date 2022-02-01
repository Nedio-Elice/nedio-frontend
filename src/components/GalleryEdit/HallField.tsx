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
}

function HallField({ halls }: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, name }) => {
            return <HallAddInterface key={id} id={id} name={name} />;
          })
        : '아직 등록된 전시관이 없습니다 :)'}
    </Container>
  );
}

export default HallField;
