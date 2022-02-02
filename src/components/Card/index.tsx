import styled from 'styled-components';
import { CardData } from '../../types/Card';
import { dateToString } from '../../utils/date';

interface Props {
  cardInfo: CardData;
}

function Card({ cardInfo }: Props) {
  return (
    <Container>
      <CardImg src={cardInfo.posterUrl} alt={cardInfo.title} />
      <CardTitle>{cardInfo.title}</CardTitle>
      <CardContent>
        <CardAuthor>{cardInfo.author.nickname}</CardAuthor>
        <CardPeriod>{`${dateToString(cardInfo.startDate)} ~ ${dateToString(
          cardInfo.endDate,
        )}`}</CardPeriod>
      </CardContent>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 8px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background: linear-gradient(180deg, #ffffff 0%, #ededed 51.8%, #ffffff 100%);
  mix-blend-mode: normal;
  box-shadow: -8px -8px 16px rgba(255, 255, 255, 0.25), 8px 8px 16px #dde1e9;
  border-radius: 15px;
  width: 250px;
  height: 380px;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 15px;
`;

const CardTitle = styled.h5`
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CardAuthor = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  color: #666666;
`;
const CardPeriod = styled.p`
  color: #666666;
`;
