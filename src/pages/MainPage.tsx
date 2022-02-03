import styled from 'styled-components';
import Card from '../components/Card';
import { sample, sample2, sample3 } from '../constants/images';

function MainPage() {
  // TODO: 받아오는 컴포넌트 위치 변경
  const mockData = [
    {
      title: '제주 특별전',
      author: {
        nickname: 'jiseong',
        contact: '010-1234-5678',
        email: 'example@gmail.com',
      },
      posterUrl: sample,
      description: 'This is...',
      startDate: new Date(2022, 0, 25),
      endDate: new Date(),
      isOpened: true,
    },
    {
      title: '슈퍼 네이쳐',
      author: {
        nickname: 'jiseong2',
        contact: '010-1234-5678',
        email: 'example@gmail.com',
      },
      posterUrl: sample2,
      description: 'This is...',
      startDate: new Date(2022, 0, 25),
      endDate: new Date(),
      isOpened: false,
    },
    {
      title: '엘리스를 찾아서',
      author: {
        nickname: 'jiseong3',
        contact: '010-1234-5678',
        email: 'example@gmail.com',
      },
      posterUrl: sample3,
      description: 'This is...',
      startDate: new Date(2022, 0, 25),
      endDate: new Date(),
      isOpened: false,
    },
    {
      title: '제주 특별전',
      author: {
        nickname: 'jiseong4',
        contact: '010-1234-5678',
        email: 'example@gmail.com',
      },
      posterUrl: sample,
      description: 'This is...',
      startDate: new Date(2022, 0, 25),
      endDate: new Date(),
      isOpened: false,
    },
  ];

  return (
    <MainContainer>
      {mockData.map((cardInfo) => (
        <Card key={`${cardInfo.author.nickname}`} cardInfo={cardInfo} />
      ))}
    </MainContainer>
  );
}

export default MainPage;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
  mix-blend-mode: normal;

  // TODO: temp
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 30px;
  padding: 20px;
`;
