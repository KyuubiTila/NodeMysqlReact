import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginCard = ({ initialValues, validationSchema, loginUser }) => {
  return (
    <Formik
      onSubmit={(data, params) => {
        loginUser(data);

        params.resetForm();
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            USERNAME
          </label>
          <Field
            autoComplete="off"
            type="text"
            name="username"
            placeholder="enter username"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="username" component="span" />
          </span>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            PASSWORD
          </label>
          <Field
            autoComplete="off"
            type="password"
            name="password"
            placeholder="enter password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
          <span className="text-red-500">
            <ErrorMessage name="password" component="span" />
          </span>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          LOGIN
        </button>
      </Form>
    </Formik>
  );
};

export default LoginCard;
