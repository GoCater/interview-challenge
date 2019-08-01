import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { postNewTweet } from "../utils/remote-actions";

import "./TweetCreationForm.css";

const INITIAL_VALUES = {
  content: ""
};

const TweetSchema = Yup.object().shape({
  content: Yup.string()
    .max(240, "Too Long!")
    .required("Required")
});

const TweetCreationForm = () => {
  const [tweetSucccesfullyCreated, setTweetCreated] = useState(null);
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    postNewTweet({
      ...values
    })
      .then(res => {
        setSubmitting(false);
        setTweetCreated(true);
        resetForm(INITIAL_VALUES);
      })
      .catch(err => {
        setSubmitting(false);
        setTweetCreated(false);
      });
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmit}
        validationSchema={TweetSchema}
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
            <form onSubmit={handleSubmit} className="tweet-creation-form">
              <div className="input-container">
                <label htmlFor="content">Content</label>
                <textarea
                  id="content"
                  placeholder="Content"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  className={`text-input ${errors.content ? "error" : ""}`}
                />
                {errors.content && touched.content && (
                  <label htmlFor="content" className="error-message">
                    {errors.content}
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
      {tweetSucccesfullyCreated === true && (
        <span>Tweet succesfully created</span>
      )}
      {tweetSucccesfullyCreated === false && (
        <span className="error-message">
          An error ocurred while creating the tweet
        </span>
      )}
    </div>
  );
};

export default React.memo(TweetCreationForm);
