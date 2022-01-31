function GalleryEdit() {
  return (
    <div>
      <h1>This is GalleryEditPage</h1>
      <div>
        <label htmlFor="posterUpload">포스터 업로드</label>
        <input type="file" id="posterUpload" />
      </div>
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="category">분류</label>
        <select id="category">
          <option value="">카테고리를 선택해주세요</option>
          <option value="자연">자연</option>
          <option value="인물">인물</option>
          <option value="동물">동물</option>
        </select>
      </div>
      <div>
        <label htmlFor="date">기간</label>
        <input type="date" id="date" />
        -
        <input type="date" id="date" />
      </div>
      <div>
        <label htmlFor="description">설명</label>
        <input type="textarea" id="description" />
      </div>
    </div>
  );
}

export default GalleryEdit;
