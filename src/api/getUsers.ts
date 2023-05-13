import { User } from '../context/github/types';
import { Method, Route } from './types';

const CLIENT_ID = '4317963456a8c7b100e6';
const CLIENT_SECRET = '33e7109d812e1a075d82d203a08ffbdc930feac4';
const CREDS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

type UserDTO = {
  id: number;
  login: string;
  node_id: string;
  score: number;
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
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

type ResponseDTO = {
  items: UserDTO[];
  total_count: number;
  incomplete_results: boolean;
};

class GetUsers implements Route {
  method: Method = 'GET';

  getUrl(value?: string): string {
    return `/users?q=${value}&${CREDS}`;
  }

  getData({ items }: ResponseDTO): User[] {
    return items.map(({ id, avatar_url, login }) => ({ id, login, avatar: avatar_url }));
  }
}

export default new GetUsers();
