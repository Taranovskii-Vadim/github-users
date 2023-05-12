type RouteItem = {
  path: string;
  // TODO what is the diff between jsx.element and reactNode
  element: JSX.Element;
};

export type RouteKey = 'home' | 'profile' | 'about';

export type RouteResult = { id: RouteKey } & RouteItem;
export type RouteDictionary = Record<RouteKey, RouteItem>;
