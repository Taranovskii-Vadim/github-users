import { User } from 'src/context/users/types';

import { CREDS } from './constants';
import { CommonUserDTO, Method, Route } from './types';

type ResponseDTO = {
  total_count: number;
  items: CommonUserDTO[];
  incomplete_results: boolean;
};

class GetUsers implements Route {
  method: Method = 'GET';

  getUrl(value?: string): string {
    return `/search/users?q=${value}&${CREDS}`;
  }

  getData({ items }: ResponseDTO): User[] {
    return items.map(({ id, avatar_url, login }) => ({ id, login, avatar: avatar_url }));
  }
}

export default new GetUsers();
