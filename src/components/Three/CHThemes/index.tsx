import Scene from '../scene';

import Ground from '../Ground';

// TODO: 자신만의 방
// TODO: click시 작품
// TODO: 적절한 조명
// TODO: 이미지 비율 고려

function CHThemes() {
  return (
    <Scene>
      <Ground position={[0, 1, 0]} />
    </Scene>
  );
}

export default CHThemes;
