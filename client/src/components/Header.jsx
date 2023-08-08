import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          
          <div class="flex items-center">
            <a
              href="tel:5541251234"
              class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </Link>
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav> */}
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
