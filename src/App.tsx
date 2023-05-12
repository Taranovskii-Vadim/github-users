import { Routes, Route } from 'react-router-dom';

import { getRoutes } from './routes';

const App = (): JSX.Element => {
  const routes = getRoutes();

  return (
    <>
      <nav>this is place for navigation bar</nav>
      <div className="container w-3/4 m-auto mt-6">
        <Routes>
          {routes.map(({ id, ...other }) => (
            <Route key={id} {...other} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default App;
