import { FIXED_FRAME } from '../Constants';
import Picture from '../Picture';
import Frame from '../Frame';

function Frames({ pickItem, hall }: any) {
  return (
    <>
      {hall &&
        hall.imagesData.map((item: any, idx: any) => (
          <Frame
            position={FIXED_FRAME[idx].framePosition}
            rotation={FIXED_FRAME[idx].rotation}
            key={FIXED_FRAME[idx].frame_id}
            ratio="horizontal"
          >
            {item.imageUrl !== '' && (
              <Picture
                position={FIXED_FRAME[idx].picturePosition}
                rotation={FIXED_FRAME[idx].rotation}
                spotPos={FIXED_FRAME[idx].spotPos}
                pickItem={pickItem}
                data={item}
              />
            )}
          </Frame>
        ))}
    </>
  );
}

export default Frames;
