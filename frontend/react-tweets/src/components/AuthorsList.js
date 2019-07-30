import React, { useState, useEffect, useCallback } from "react";
import Author from "./Author";
import { getAuthors } from "../utils/remote-actions";
import AuthorCreationForm from "./AuthorCreationForm";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const fetchData = useCallback(() => {
    getAuthors().then(request => setAuthors(request.data));
  }, []);

  useEffect(fetchData, []);

  return (
    <React.Fragment>
      <div className="authors-container">
        {authors.map(author => (
          <Author key={author._id} author={author} />
        ))}
      </div>
      <AuthorCreationForm onSuccess={fetchData} />
    </React.Fragment>
  );
};

export default AuthorsList;
