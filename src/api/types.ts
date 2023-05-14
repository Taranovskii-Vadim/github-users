export type Method = 'GET';

export type Route<D = unknown> = {
  method: Method;

  getUrl: (q?: string) => string;

  getData: (response: any) => D;
};

export type CommonUserDTO = {
  id: number;
  login: string;
  node_id: string;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};
