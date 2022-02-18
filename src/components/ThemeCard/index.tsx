import styled from 'styled-components';

interface DefaultTheme {
  imageURL: string;
  title: string;
  category: string;
}

interface Props {
  item: DefaultTheme;
  handleClick: (category: string) => void;
}

function ThemeCard({ item, handleClick }: Props) {
  return (
    <Container link={`${item.imageURL}`}>
      <ThemeCardTitle>{item.title}</ThemeCardTitle>
      <ThemeCardBtn onClick={() => handleClick(item.category)}>
        찾아보기
      </ThemeCardBtn>
    </Container>
  );
}

export default ThemeCard;

const Container = styled.div<{ link: string }>`
  width: 250px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 25px;
  box-shadow: 8px 8px 16px rgba(174, 174, 174, 0.75);
  border-radius: 8px;

  &:before {
    content: '';
    position: absolute;
    opacity: 0.75;
    background-image: ${({ link }) => `url(${link})`};
    background-repeat: no-repeat;
    border-radius: 8px;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const ThemeCardTitle = styled.h5`
  color: white;
  font-size: 28px;
  line-height: 35px;
`;

const ThemeCardBtn = styled.button`
  outline: none;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 25px;
  background: none;
  color: white;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.3);
  }
`;
