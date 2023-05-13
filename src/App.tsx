import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getRoutes } from 'src/routes';
import { GitHubState } from 'src/context/github';

import Navbar from 'src/components/Navbar';

const App = (): JSX.Element => {
  const routes = getRoutes();

  return (
    <>
      <Navbar />
      <div className="container w-3/4 m-auto mt-6">
        <Suspense fallback={<div>loading...</div>}>
          <GitHubState>
            <Routes>
              {routes.map(({ id, ...other }) => (
                <Route key={id} {...other} />
              ))}
            </Routes>
          </GitHubState>
        </Suspense>
      </div>
    </>
  );
};

export default App;
