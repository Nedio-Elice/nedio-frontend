import ButtonBasic from '../components/ButtonBasic';

function GalleryDetailPage() {
  return (
    <div>
      {ButtonBasic({
        value: '정보변경',
        handleClick: (event: React.MouseEvent) => {},
      })}
    </div>
  );
}

export default GalleryDetailPage;
