import { FIXED_FRAME } from '../Constants';
import Picture from '../Picture';
import Frame from '../Frame';

function Frames({ pickItem, hall }: any) {
  return (
    <>
      {hall &&
        hall.imagesData.map((item: any, idx: any) => {
          const { width, height } = item;

          let ratio;
          if (width === '' || height === '') ratio = 'horizontal';
          else {
            ratio =
              parseInt(width, 10) > parseInt(height, 10)
                ? 'horizontal'
                : 'vertical';
          }

          return (
            <Frame
              position={FIXED_FRAME[idx].framePosition}
              rotation={FIXED_FRAME[idx].rotation}
              key={FIXED_FRAME[idx].frame_id}
              ratio={ratio}
            >
              {item.imageUrl !== '' && (
                <Picture
                  position={FIXED_FRAME[idx].picturePosition}
                  rotation={FIXED_FRAME[idx].rotation}
                  spotPos={FIXED_FRAME[idx].spotPos}
                  pickItem={pickItem}
                  data={item}
                  ratio={ratio}
                />
              )}
            </Frame>
          );
        })}
    </>
  );
}

export default Frames;
