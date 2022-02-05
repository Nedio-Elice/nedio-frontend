import { Gallery } from '../types/GalleryEdit';

export const fetchMockImageUrl = async (formData: FormData) => {
  const mockUrl =
    'https://images.unsplash.com/photo-1643779374659-70a427607bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

  await console.log(formData);

  return mockUrl;
};

export const fetchGallery = async (gallery: Gallery) => {
  await console.log(gallery);

  const response = {
    status: 200,
  };

  return response.status;
};
