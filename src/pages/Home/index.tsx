import { useContext } from 'react';

import { GitHubContext } from '../../context/github';

import UserCard from './components/UserCard';
import SearchForm from './components/SearchForm';

const Home = (): JSX.Element => {
  const { data, handleSearch } = useContext(GitHubContext);

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <div className="grid grid-cols-4 gap-4 pb-4">
        {data.map((item) => (
          <UserCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
