import {
  FAR_FROM_DEFAULT_POSITION,
  WALL_HEIGHT,
  WALL_WIDTH,
} from '../Constants';
import Picture from '../Picture';
import Frame from '../Frame';

function Frames({ imgURL, content, pickItem }: any) {
  return (
    <>
      {/* 앞쪽 벽 */}
      <Frame
        position={[
          FAR_FROM_DEFAULT_POSITION - 47.75,
          WALL_HEIGHT / 3,
          FAR_FROM_DEFAULT_POSITION - 134,
        ]}
      >
        <Picture
          position={[
            FAR_FROM_DEFAULT_POSITION - 47.75,
            WALL_HEIGHT / 3,
            FAR_FROM_DEFAULT_POSITION - 134.5,
          ]}
          spotPos={[FAR_FROM_DEFAULT_POSITION - 47.75, 35, -110]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1610897883927-735bcf1f28f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzIyfHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      <Frame
        position={[
          FAR_FROM_DEFAULT_POSITION - 18.25,
          WALL_HEIGHT / 3,
          FAR_FROM_DEFAULT_POSITION - 134,
        ]}
      >
        <Picture
          position={[
            FAR_FROM_DEFAULT_POSITION - 18.25,
            WALL_HEIGHT / 3,
            FAR_FROM_DEFAULT_POSITION - 134.5,
          ]}
          spotPos={[FAR_FROM_DEFAULT_POSITION - 18.25, 35, -110]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1501743029101-21a00d6a3fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTA3fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      <Frame
        position={[
          FAR_FROM_DEFAULT_POSITION + 12.25,
          WALL_HEIGHT / 3,
          FAR_FROM_DEFAULT_POSITION - 134,
        ]}
      >
        <Picture
          position={[
            FAR_FROM_DEFAULT_POSITION + 12.25,
            WALL_HEIGHT / 3,
            FAR_FROM_DEFAULT_POSITION - 134.5,
          ]}
          spotPos={[FAR_FROM_DEFAULT_POSITION + 12.25, 35, -110]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1602519362498-a57e90340bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY0fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      {/* 왼쪽 벽 */}
      <Frame
        position={[
          -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
          WALL_HEIGHT / 3,
          -WALL_WIDTH + 24.5,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <Picture
          position={[
            -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
            WALL_HEIGHT / 3,
            -WALL_WIDTH + 24.5,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[-45, 35, -WALL_WIDTH + 24.5]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        />
      </Frame>
      <Frame
        position={[
          -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
          WALL_HEIGHT / 3,
          -WALL_WIDTH - 3.5,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <Picture
          position={[
            -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
            WALL_HEIGHT / 3,
            -WALL_WIDTH - 3.5,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[-45, 35, -WALL_WIDTH - 3.5]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1578258775864-4d2a10c74688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      <Frame
        position={[
          -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION + 0.4,
          WALL_HEIGHT / 3,
          -WALL_WIDTH - 29.5,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <Picture
          position={[
            -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION,
            WALL_HEIGHT / 3,
            -WALL_WIDTH - 29.5,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[-45, 35, -WALL_WIDTH - 29.5]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1601230202587-1b3f0286c1b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxjYXR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      {/* 오른쪽 벽 */}
      <Frame
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
          WALL_HEIGHT / 3,
          5,
        ]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <Picture
          position={[
            WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
            WALL_HEIGHT / 3,
            5,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[45, 35, 5]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1596854307943-279e29c90c14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
      <Frame
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
          WALL_HEIGHT / 3,
          -22,
        ]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <Picture
          position={[
            WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
            WALL_HEIGHT / 3,
            -22,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[45, 35, -22]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        />
      </Frame>
      <Frame
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.8,
          WALL_HEIGHT / 3,
          -49,
        ]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <Picture
          position={[
            WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION - 0.5,
            WALL_HEIGHT / 3,
            -49,
          ]}
          rotation={[0, Math.PI / 2, 0]}
          spotPos={[45, 35, -49]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1585937250791-efc81fc76e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
        />
      </Frame>
      {/* 메인 */}
      <Frame
        position={[
          -WALL_WIDTH / 4 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 3,
          -10 - FAR_FROM_DEFAULT_POSITION + 0.8,
        ]}
      >
        <Picture
          position={[
            -WALL_WIDTH / 4 + FAR_FROM_DEFAULT_POSITION,
            WALL_HEIGHT / 3,
            -10 - FAR_FROM_DEFAULT_POSITION + 0.5,
          ]}
          spotPos={[-2.5, 35, -20]}
          pickItem={pickItem}
          imgURL="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        />
      </Frame>
    </>
  );
}

export default Frames;
