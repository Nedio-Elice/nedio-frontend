import { lazy } from 'react';
import { PATH } from './path';

const Main = lazy(() => import('../pages/MainPage'));
const GallerySearch = lazy(() => import('../pages/GallerySearchPage'));
const MyPage = lazy(() => import('../pages/MyPage'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetailPage'));
const GalleryEdit = lazy(() => import('../pages/GalleryEditPage'));
const Hall = lazy(() => import('../pages/HallPage'));

const ROUTE = [
  { path: PATH.MAIN, Component: Main, auth: false },
  {
    path: PATH.GALLERY_SEARCH,
    Component: GallerySearch,
    auth: false,
  },
  {
    path: PATH.MY_PAGE,
    Component: MyPage,
    auth: false,
  },
  {
    path: PATH.GALLERY_DETAIL,
    Component: GalleryDetail,
    auth: false,
  },
  {
    path: PATH.GALLERY_EDIT,
    Component: GalleryEdit,
    auth: false,
  },
  {
    path: PATH.GALLERY_EDIT_MODIFY,
    Component: GalleryEdit,
    auth: false,
  },
  {
    path: PATH.HALL,
    Component: Hall,
    auth: false,
  },
];

export default ROUTE;
