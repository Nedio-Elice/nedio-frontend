import { lazy } from 'react';
import { PATH } from './path';

const Landing = lazy(() => import('../pages/LandingPage'));
const Main = lazy(() => import('../pages/MainPage'));
const GallerySearch = lazy(() => import('../pages/GallerySearchPage'));
const MyPage = lazy(() => import('../pages/MyPage'));
const GalleryDetail = lazy(() => import('../pages/GalleryDetailPage'));
const GalleryEdit = lazy(() => import('../pages/GalleryEditPage'));
const Hall = lazy(() => import('../pages/HallPage'));

const ROUTE = [
  { path: PATH.LANDING, Component: Landing, auth: false },
  { path: PATH.MAIN, Component: Main, auth: false },
  {
    path: PATH.GALLERY_SEARCH,
    Component: GallerySearch,
    auth: false,
  },
  {
    path: PATH.MY_PAGE,
    Component: MyPage,
    auth: true,
  },
  {
    path: PATH.GALLERY_DETAIL,
    Component: GalleryDetail,
    auth: false,
  },
  {
    path: PATH.GALLERY_EDIT,
    Component: GalleryEdit,
    auth: true,
  },
  {
    path: PATH.GALLERY_EDIT_MODIFY,
    Component: GalleryEdit,
    auth: true,
  },
  {
    path: PATH.HALL,
    Component: Hall,
    auth: false,
  },
];

export default ROUTE;
