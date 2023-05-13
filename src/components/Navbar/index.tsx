import { NavLink } from 'react-router-dom';

import { getLinks } from 'src/routes';

const Navbar = (): JSX.Element => {
  const links = getLinks();

  return (
    <nav className="bg-gray-800 flex space-x-4 p-4 sm:px-6 lg:px-8">
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          {item.text}
        </NavLink>
      ))}
      {/* TODO change active link */}
      {/* className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" */}
    </nav>
  );
};

export default Navbar;
