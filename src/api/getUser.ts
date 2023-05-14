import { User } from 'src/context/user/types';

import { CREDS } from './constants';
import { CommonUserDTO, Method, Route } from './types';

type ResponseDTO = CommonUserDTO & {
  bio: null;
  blog: string;
  company: string;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  hireable: null;
  location: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: null;
  updated_at: string;
};

class GetUser implements Route {
  method: Method = 'GET';

  getUrl(value?: string): string {
    return `/users/${value}?${CREDS}`;
  }

  getData({ id, login, avatar_url, location, email, followers, created_at }: ResponseDTO): User {
    return { id, login, avatar: avatar_url, location, email, followers, createdAt: created_at };
  }
}

export default new GetUser();
