import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import CustomRoute from './components/CustomRoute';
import { PATH } from './constants/path';
import ROUTE from './constants/route';
import NotFoundPage from './pages/NotFoundPage';
import NavContainer from './containers/NavContainer';
import Spinner from './components/Spinner';

function App() {
  return (
    <Router>
      <Routes>
        {ROUTE.map(({ path, Component, auth }) => (
          <Route
            key={path}
            element={<CustomRoute auth={auth} redirectTo={PATH.MAIN} />}
          >
            <Route
              path={path}
              element={
                <Suspense fallback={<Spinner />}>
                  <NavContainer />
                  <Component />
                </Suspense>
              }
            />
          </Route>
        ))}
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
