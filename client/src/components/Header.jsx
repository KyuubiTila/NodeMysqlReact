import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';

const Header = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({
      username: '',
      id: 0,
      status: false,
    });
  };

  return (
    <>
      <nav className=" flex flex-wrap justify-between bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to={'/posts'}
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to={'/createpost'}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Create Post
                </Link>
              </li>
              {!authState.status ? (
                <>
                  <li>
                    <Link
                      to={'/register'}
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/login'}
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      onClick={logout}
                      to={'/posts'}
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Logout
                    </Link>
                  </li>
                  <li>Welcome: {authState.username}</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
