import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getRoutes } from 'src/routes';
import { UserState } from 'src/context/user';
import { UsersState } from 'src/context/users';

import Navbar from 'src/components/Navbar';

// Checklist for future
// 1) add loader
// 2) fetch data using debounce not from submit
// 3) finish about product page
// 4) Fix eslint errors/wranings

const App = (): JSX.Element => {
  const routes = getRoutes();

  return (
    <>
      <Navbar />
      <div className="container w-3/4 m-auto mt-6">
        <Suspense fallback={<div>loading...</div>}>
          <UsersState>
            <UserState>
              <Routes>
                {routes.map(({ id, ...other }) => (
                  <Route key={id} {...other} />
                ))}
              </Routes>
            </UserState>
          </UsersState>
        </Suspense>
      </div>
    </>
  );
};

export default App;
