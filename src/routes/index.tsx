import { lazy } from 'react';

import { RouteDictionary, RouteKey, RouteResult } from './types';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Profile = lazy(() => import('../pages/Profile'));

const ROOT = '/';

const ROUTES: RouteDictionary = {
  home: { path: ROOT, element: <Home /> },
  about: { path: `${ROOT}about`, element: <About /> },
  profile: { path: `${ROOT}profile/name`, element: <Profile /> },
};

export const getRoutes = (): RouteResult[] => {
  const keys = Object.keys(ROUTES) as RouteKey[];

  return keys.map((id) => ({ id, ...ROUTES[id] }));
};
