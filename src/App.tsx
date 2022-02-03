import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import CustomRoute from './components/CustomRoute';
import { PATH } from './constants/path';
import ROUTE from './constants/route';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        {ROUTE.map(({ path, Component, auth }) => (
          <Route
            key={path}
            path="/"
            element={<CustomRoute auth={auth} redirectTo={PATH.MAIN} />}
          >
            <Route
              path={path}
              element={
                // TODO: Loading style
                <Suspense fallback={<>Loading...</>}>
                  <NavBar />
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
