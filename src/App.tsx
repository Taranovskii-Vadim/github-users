import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getRoutes } from 'src/routes';
import { UsersState } from 'src/context/users';

import Navbar from 'src/components/Navbar';

const App = (): JSX.Element => {
  const routes = getRoutes();

  return (
    <>
      <Navbar />
      <div className="container w-3/4 m-auto mt-6">
        <Suspense fallback={<div>loading...</div>}>
          <UsersState>
            <Routes>
              {routes.map(({ id, ...other }) => (
                <Route key={id} {...other} />
              ))}
            </Routes>
          </UsersState>
        </Suspense>
      </div>
    </>
  );
};

export default App;
