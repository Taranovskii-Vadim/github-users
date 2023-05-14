export type RouteKey = 'home' | 'about' | 'profile';

export type Paths = Record<RouteKey, string>;

export type Link = { text: string; to: string };

export type Nodes = Record<RouteKey, JSX.Element>;

export type Route = { id: RouteKey; path: string; element: JSX.Element };
