import React, { useContext, useEffect } from "react";
import { GithubContext } from "../context/GithubContext";
import { useHistory } from 'react-router-dom';

const Form = () => {
  const { search, setSearch, getSearch } = useContext(GithubContext);
  const history = useHistory();

  useEffect(() => {
    history.push('/overview');
  }, []);

  return (
    <form onSubmit={getSearch}>
      <input 
        type="text"
        autoFocus
        placeholder="Search for a user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Form;
