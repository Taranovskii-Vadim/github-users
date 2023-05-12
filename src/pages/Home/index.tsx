import { useContext } from 'react';

import { GitHubContext } from '../../context/github';

import SearchForm from './components/SearchForm';

const Home = (): JSX.Element => {
  const { data } = useContext(GitHubContext);

  return (
    <>
      <SearchForm />
    </>
  );
};

export default Home;
