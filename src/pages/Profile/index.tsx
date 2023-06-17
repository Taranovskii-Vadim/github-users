import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from 'src/context/user';

const Profile = (): JSX.Element => {
  const { isLoading, data, fetchData } = useContext(UserContext);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchData(name);
  }, [name]);

  console.log(data);

  return <div>Profile</div>;
};

export default Profile;
