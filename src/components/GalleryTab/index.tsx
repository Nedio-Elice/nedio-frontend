import { useState } from 'react';
import { ButtonWrapperTab } from '../../styles/myPage';
import Buttons from '../Buttons';

const { ButtonNeumo } = Buttons;

interface Props {
  changeState: (state: string) => void;
}

function GalleryTab({ changeState }: Props) {
  const [tabState, setTabState] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  const handleClick = (state: string) => {
    switch (state) {
      case 'Running':
        changeState('Running');
        setTabState([true, false, false]);
        break;
      case 'Coming':
        changeState('Coming');
        setTabState([false, true, false]);
        break;
      case 'Closed':
        changeState('Closed');
        setTabState([false, false, true]);
        break;
      default:
        break;
    }
  };

  return (
    <ButtonWrapperTab>
      <ButtonNeumo
        value="운영중인 전시"
        handleClick={() => handleClick('Running')}
        stay={tabState[0]}
      />
      <ButtonNeumo
        value="예정된 전시"
        handleClick={() => handleClick('Coming')}
        stay={tabState[1]}
      />
      <ButtonNeumo
        value="종료된 전시"
        handleClick={() => handleClick('Closed')}
        stay={tabState[2]}
      />
    </ButtonWrapperTab>
  );
}

export default GalleryTab;
