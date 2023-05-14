import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UserContext } from 'src/context/user';

const Profile = (): JSX.Element => {
  const { fetchData } = useContext(UserContext);
  const { name } = useParams<{ name: string }>();

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return <div>Profile</div>;
};

export default Profile;
