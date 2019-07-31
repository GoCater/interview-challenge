import React, { useState } from 'react';
import { Formik } from 'formik';
import './AuthorCreationForm.css';

const DEFAULT_AUTHOR_PIC =
  'http://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg';

const postNewAuthor = () => {};

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  handle: ''
};

const AuthorCreationForm = () => {
  const [authorSucccesfullyCreared, setAuthorCreated] = useState(null);
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    postNewAuthor({
      ...values,
      profilePicture: DEFAULT_AUTHOR_PIC,
    })
      .then(() => {
        setSubmitting(false);
        setAuthorCreated(true);
        resetForm(INITIAL_VALUES);
      })
      .catch(() => {
        setSubmitting(false);
        setAuthorCreated(false);
      });
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
      >
        {props => {
          const {
            touched,
            values,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          } = props;

          return (
            <form onSubmit={handleSubmit} className="author-creation-form">
              <div className="input-container">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  placeholder="First name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={`text-input ${errors.firstName ? 'error' : ''}`}
                />
                {errors.firstName && touched.firstName && (
                  <label htmlFor="firstName" className="error-message">
                    {errors.firstName}
                  </label>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="email">Last name</label>
                <input
                  id="lastName"
                  placeholder="Last name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={`text-input ${errors.lastName ? 'error' : ''}`}
                />
                {errors.lastName && touched.lastName && (
                  <label htmlFor="lastName" className="error-message">
                    {errors.lastName}
                  </label>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="handle">Handle</label>
                <input
                  id="handle"
                  placeholder="Handle"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.handle}
                  className={`text-input ${errors.handle ? 'error' : ''}`}
                />
                {errors.handle && touched.handle && (
                  <label htmlFor="handle" className="error-message">
                    {errors.handle}
                  </label>
                )}
              </div>

              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset form
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
      {authorSucccesfullyCreared === true && (
        <span>Author succesfully created</span>
      )}
      {authorSucccesfullyCreared === false && (
        <span className="error-message">
          An error ocurred while creating the author
        </span>
      )}
    </div>
  );
};

export default AuthorCreationForm;
