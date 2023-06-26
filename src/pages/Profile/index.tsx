import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from 'src/context/user';

const Profile = (): JSX.Element => {
  const { isLoading, data, fetchData, resetData } = useContext(UserContext);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchData(name);

    return resetData;
  }, [name]);

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="flex items-center mb-5">
        <img
          src={data.profile.avatar}
          alt={`${data.profile.login}_avatar`}
          className="w-52 h-52 rounded-full shadow-lg"
        />
        <div className="ml-8">
          <h6>Login: {data.profile.login}</h6>
          <h6>Email: {data.profile.email}</h6>
          <h6>Followers: {data.profile.followers}</h6>
          <h6>Registration date: {new Date(data.profile.createdAt).getFullYear()}</h6>
          <h6>Location: {data.profile.location}</h6>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Forks
            </th>
            <th scope="col" className="px-6 py-3">
              Language
            </th>
            <th scope="col" className="px-6 py-3">
              Private
            </th>
          </tr>
        </thead>
        <tbody>
          {data.repos.length ? (
            data.repos.map((item) => (
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.name}</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.forks}</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.language}</th>
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.private ? 'yes' : 'no'}</th>
              </tr>
            ))
          ) : (
            <tr>no data to show</tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Profile;
