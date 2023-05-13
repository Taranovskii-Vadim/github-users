import { User } from '../../../../context/github/types';

interface Props {
  data: User;
}

const UserCard = ({ data: { id, login, avatar } }: Props): JSX.Element => (
  <div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar} alt={`${login}_avatar`} />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{login}</h5>
      <div className="flex mt-4 space-x-3 md:mt-6">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Подробнее
        </a>
      </div>
    </div>
  </div>
);

export default UserCard;
