import { lazy } from 'react';

import { Link, Nodes, Paths, Route, RouteKey } from './types';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Profile = lazy(() => import('../pages/Profile'));

const ROOT = '/';
const NODES: Nodes = { home: <Home />, about: <About />, profile: <Profile /> };
const PATHS: Paths = { home: ROOT, about: `${ROOT}about`, profile: `${ROOT}profile/:name` };

export const getProfilePagePath = (name: string): string => `${ROOT}profile/${name}`;

export const getLinks = (): Link[] => [
  { text: 'Домашняя страница', to: PATHS.home },
  { text: 'О продукте', to: PATHS.about },
];

export const getRoutes = (): Route[] => {
  const keys = Object.keys(NODES) as RouteKey[];

  return keys.map((id) => ({ id, path: PATHS[id], element: NODES[id] }));
};
