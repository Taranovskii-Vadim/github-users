import { useContext } from 'react';

import { UsersContext } from 'src/context/users';

import UserCard from './components/UserCard';

import { useDebounce } from './hooks';

const Home = (): JSX.Element => {
  const { data, handleSearch } = useContext(UsersContext);

  const debouncedSearch = useDebounce(handleSearch, 500);

  return (
    <>
      <input
        type="text"
        onChange={(e) => debouncedSearch(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="grid grid-cols-4 gap-4 pb-4 mt-4">
        {data.map((item) => (
          <UserCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
