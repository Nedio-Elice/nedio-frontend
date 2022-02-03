/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselButton from './CarouselButton';
import useWindowSize from '../../hooks/useWindowSize';
import { CAROUSEL } from '../../constants/carousel';
import { calcWidth, paddingToItem } from '../../utils/carousel';
import { ThemeCardData } from '../../types/Card';
import { dateToString } from '../../utils/date';
import DetatilButton from './DetatilButton';

export type HANDLETYPE = keyof typeof CAROUSEL.HANDLE_TYPE;

interface Props {
  cardInfo: Array<ThemeCardData>;
}

function Carousel({ cardInfo }: Props) {
  const [windowWidth] = useWindowSize();
  const [itemWidth, setItemWidth] = useState(() =>
    calcWidth(
      windowWidth,
      CAROUSEL.PADDING,
      CAROUSEL.ITEM_MIN_WIDTH,
      CAROUSEL.ITEM_MAX_WIDTH,
    ),
  );
  const [paddedItems] = useState(() =>
    paddingToItem(cardInfo, CAROUSEL.PADDING_DATA),
  );
  const transitionStyle = `transform ${CAROUSEL.TRANSITION_TIME}ms ease-in-out 0s`;
  const [transitionEffect, setTransitionEffect] = useState(transitionStyle);
  const [curIdx, setCurIdx] = useState(CAROUSEL.PADDING_DATA);
  const [isClicked, setIsClicked] = useState(false);
  const itemSize = cardInfo.length;

  useEffect(() => {
    const nextWidth = calcWidth(
      windowWidth,
      CAROUSEL.PADDING,
      CAROUSEL.ITEM_MIN_WIDTH,
      CAROUSEL.ITEM_MAX_WIDTH,
    );
    setItemWidth(nextWidth);
  }, [windowWidth]);

  const isMinMaxCarousel = (idx: number) =>
    idx - CAROUSEL.PADDING_DATA < 0 || idx - CAROUSEL.PADDING_DATA >= itemSize;

  function changeCarousel(index: number) {
    setTimeout(() => {
      setTransitionEffect('');
      setCurIdx(index);
    }, CAROUSEL.TRANSITION_TIME);
  }

  function handleCarousel(type: HANDLETYPE) {
    const nextIdx = curIdx + CAROUSEL.HANDLE_TYPE[type];
    setIsClicked(true);
    setCurIdx(nextIdx);

    if (isMinMaxCarousel(nextIdx)) {
      const changeIdx = nextIdx - CAROUSEL.HANDLE_TYPE[type] * itemSize;
      changeCarousel(changeIdx);
    }

    setTransitionEffect(transitionStyle);
    setTimeout(() => {
      setIsClicked(false);
    }, CAROUSEL.TRANSITION_TIME);
  }

  return (
    <Container>
      <CarouselRow
        moveX={(-100 / paddedItems.length) * (curIdx + 0.5)}
        transitionEffect={transitionEffect}
      >
        {paddedItems.map((item, idx) => (
          <CarouselCol
            key={`${idx}`}
            itemWidth={itemWidth}
            isCurrent={curIdx === idx}
          >
            <ItemContainer>
              <ThemeTag />
              <ThemeTagTitle>{item.theme}</ThemeTagTitle>
              <Content>
                <Title>{item.title}</Title>
                <Period>{`${dateToString(item.startDate)} ~ ${dateToString(
                  item.endDate,
                )}`}</Period>
                <Author>{item.author.nickname}</Author>
                {/* TODO: item URL (백엔드와 이야기) */}
                <DetatilButton linkURL="tempURL" isCurrent={curIdx === idx} />
              </Content>
              {windowWidth > CAROUSEL.ITEM_MIN_WIDTH + CAROUSEL.PADDING * 3 && (
                <CarouselColImg src={item.posterUrl} alt={item.title} />
              )}
            </ItemContainer>
          </CarouselCol>
        ))}
      </CarouselRow>
      <CarouselButton
        isClicked={isClicked}
        isLeft
        onClick={() => handleCarousel('PREV')}
      />
      <CarouselButton
        isClicked={isClicked}
        isLeft={false}
        onClick={() => handleCarousel('NEXT')}
      />
    </Container>
  );
}

export default Carousel;

const Container = styled.article`
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const CarouselRow = styled.section<{ moveX: number; transitionEffect: string }>`
  position: relative;
  display: flex;
  left: 50%;
  width: fit-content;
  transform: ${({ moveX }) => `translateX(calc(${moveX}%))`};
  transition: ${({ transitionEffect }) => transitionEffect};
`;

const CarouselCol = styled.div<{ isCurrent: boolean; itemWidth: number }>`
  position: relative;
  padding: 0 20px;
  filter: ${({ isCurrent }) =>
    isCurrent ? 'brightness(100%)' : 'brightness(70%)'};
  width: ${({ itemWidth }) => `${itemWidth}px` || 'auto'};
  height: 280px;
`;

const ItemContainer = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 7px;
  height: 100%;
  display: flex;
  background: #1f3e5a;
  /* background: #142029; */
  color: white;
  box-shadow: 8px 8px 16px rgba(174, 174, 174, 0.75);
`;

const CarouselColImg = styled.img`
  position: absolute;
  width: 220px;
  height: 260px;
  bottom: -25px;
  right: 6%;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const ThemeTag = styled.div`
  position: absolute;
  top: 0;
  left: 45px;
  height: 52px;
  width: 48px;
  padding: 0px;
  border-left: 24px solid white;
  border-right: 24px solid white;
  border-bottom: 24px solid transparent;
`;

const ThemeTagTitle = styled.p`
  position: absolute;
  left: calc(45px + 24px);
  transform: translateX(-50%);
  color: #1f3e5a;
  top: 10px;
  font-size: 0.8rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  margin-left: 35px;
  padding: 0 45px;
`;

const Title = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Author = styled.p`
  font-weight: 500;
  margin-bottom: 15%;
`;
const Period = styled.p`
  font-size: 0.8rem;
  margin-bottom: 15px;
`;
