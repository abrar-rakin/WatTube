import React, { useState } from "react";
import "./Home.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="srch" style={{ marginTop: "3%", marginBottom: "2%" }}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui field">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
