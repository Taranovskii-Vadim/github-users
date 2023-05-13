import { useContext } from 'react';

import { GitHubContext } from '../../context/github';

import SearchForm from './components/SearchForm';

const Home = (): JSX.Element => {
  const context = useContext(GitHubContext);

  if (!context) {
    return <div>no context...</div>;
  }

  return (
    <>
      <SearchForm onSearch={context.handleSearch} />
    </>
  );
};

export default Home;
