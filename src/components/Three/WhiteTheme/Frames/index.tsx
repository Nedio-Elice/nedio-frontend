import {
  FAR_FROM_DEFAULT_POSITION,
  WALL_HEIGHT,
  WALL_WIDTH,
} from '../Constants';
import Picture from '../Picture';
import Frame from '../Frame';

function Frames({ position, imgURL }: any) {
  const [x, y, z] = [
    -WALL_WIDTH / 4 + FAR_FROM_DEFAULT_POSITION,
    WALL_HEIGHT / 3,
    -10 - FAR_FROM_DEFAULT_POSITION + 0.5,
  ];
  return (
    <>
      <Frame position={[x, y, z]} scale={[25, 25, 50]}>
        <Picture
          position={[x, y, z]}
          size={[12, 8, 0.1]}
          // imgURL="https://nedio-image.s3.ap-northeast-2.amazonaws.com/1644339653370%20-%201644097731311%20-%20profile-sample.jpg"
          // imgURL="https://nedio-image.s3.ap-northeast-2.amazonaws.com/1644245683603%20-%20pexels-kaique-rocha-775201.jpg"
          // imgURL="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          imgURL="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      <Frame
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -FAR_FROM_DEFAULT_POSITION,
        ]}
        scale={[25, 25, 50]}
      >
        <Picture
          position={[
            WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
            WALL_HEIGHT / 3,
            -FAR_FROM_DEFAULT_POSITION,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          size={[12, 8, 0.1]}
          // imgURL="https://nedio-image.s3.ap-northeast-2.amazonaws.com/1644339653370%20-%201644097731311%20-%20profile-sample.jpg"
          // imgURL="https://nedio-image.s3.ap-northeast-2.amazonaws.com/1644245683603%20-%20pexels-kaique-rocha-775201.jpg"
          // imgURL="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          imgURL="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
    </>
  );
}

export default Frames;
