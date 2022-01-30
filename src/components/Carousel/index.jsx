/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarouselButton from './CarouselButton';
import useWindowSize from '../../hooks/useWindowSize';
import { CAROUSEL } from '../../constants/Carousel';
import { calcWidth, paddingToItem } from '../../utils/Carousel';

// TODO: TYPESCRIPT로 변환
// TODO: 캐러셀 내부 구현
// TODO: windowSize Debounce 고려
function Carousel({ items = Array.from({ length: 3 }, (v, i) => i) }) {
  const [windowWidth, windowHeight] = useWindowSize();
  const [itemWidth, setItemWidth] = useState(
    calcWidth(windowWidth, CAROUSEL.PADDING, CAROUSEL.ITEM_MAX_WIDTH),
  );
  const [paddedItems, setPaddedItems] = useState(
    paddingToItem(items, CAROUSEL.PADDING_DATA),
  );
  const transitionStyle = `transform ${CAROUSEL.TRANSITION_TIME}ms ease-in-out 0s`;
  const [transitionEffect, setTransitionEffect] = useState(transitionStyle);
  const [curIdx, setCurIdx] = useState(CAROUSEL.PADDING_DATA);
  const [isClicked, setIsClicked] = useState(false);
  const itemSize = items.length;

  useEffect(() => {
    const nextWidth = calcWidth(
      windowWidth,
      CAROUSEL.PADDING,
      CAROUSEL.ITEM_MAX_WIDTH,
    );
    setItemWidth(nextWidth);
  }, [windowWidth]);

  const isMinMaxCarousel = (idx) =>
    idx - CAROUSEL.PADDING_DATA < 0 || idx - CAROUSEL.PADDING_DATA >= itemSize;

  function changeCarousel(index) {
    setTimeout(() => {
      setTransitionEffect('');
      setCurIdx(index);
    }, CAROUSEL.TRANSITION_TIME);
  }

  function handleCarousel(type) {
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
    <CarouselContainer>
      <CarouselRow
        moveX={(-100 / paddedItems.length) * (0.5 + curIdx)}
        transitionEffect={transitionEffect}
      >
        {paddedItems.map((item, idx) => (
          <CarouselCol
            key={`${idx}`}
            itemWidth={itemWidth}
            isCurrent={curIdx === idx}
          >
            <CarouselColContainer>{idx}</CarouselColContainer>
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
        onClick={() => handleCarousel('NEXT')}
      />
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.article`
  position: relative;
  overflow: hidden;
  height: 300px;
`;

const CarouselRow = styled.section`
  position: relative;
  display: flex;
  left: 50%;
  width: fit-content;
  transform: ${({ moveX }) => `translateX(calc(${moveX}%))`};
  transition: ${({ transitionEffect }) => transitionEffect};
`;

const CarouselCol = styled.div`
  position: relative;
  padding: 0 20px;
  filter: ${({ isCurrent }) =>
    isCurrent ? 'brightness(100%)' : 'brightness(50%)'};
  width: ${({ itemWidth }) => `${itemWidth}px` || 'auto'};
  height: 300px;
`;

const CarouselColContainer = styled.div`
  border-radius: 4px;
  background: orange;
  height: 100%;
`;
