import { CREDS } from './constants';
import { Method, Route } from './types';

class GetRepositories implements Route {
  method: Method = 'GET';

  getUrl(value?: string): string {
    return `/users/${value}/repos?${CREDS}`;
  }

  getData(response: any): [] {
    return [];
  }
}

export default new GetRepositories();
