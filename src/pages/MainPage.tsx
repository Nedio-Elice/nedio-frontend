import styled from 'styled-components';
import CarouselContainer from '../containers/CarouselContainer';
import RecommendContainer from '../containers/RecommendContainer';
import ThemeContainer from '../containers/ThemeContainer';

function MainPage() {
  return (
    <Container>
      <CarouselContainer />
      <ContentsPadding>
        <ThemeContainer />
        <RecommendContainer title="전시 예정" />
        <RecommendContainer title="오늘의 추천 갤러리" />
      </ContentsPadding>
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  width: 100vw;
  min-width: 460px;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
  padding-top: 50px;
  user-select: none;
`;

const ContentsPadding = styled.article`
  display: flex;
  flex-direction: column;
  padding: 80px 0;

  > section:not(:first-child) {
    margin-top: 100px;
  }
`;
