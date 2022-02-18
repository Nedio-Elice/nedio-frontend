import styled from 'styled-components';
import SearchResultContainer from '../containers/SearchResultContainer';

function GallerySearchPage() {
  return (
    <Container>
      <ContentsPadding>
        <SearchResultContainer />
      </ContentsPadding>
    </Container>
  );
}

export default GallerySearchPage;

const Container = styled.div`
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
  user-select: none;
  width: 100%;
  min-height: 100vh;
  min-width: 460px;
`;

const ContentsPadding = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0;
`;
