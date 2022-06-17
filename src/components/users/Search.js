import { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = (props) => {
  const [text, setText] = useState("");
  const { clearUsers } = props;
  const githubContext = useContext(GithubContext);
  const { searchUsers, usersData } = githubContext;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText("");
    clearUsers();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
  };
  return (
    <div>
      <form className="form">
        <input
          name="text"
          type="text"
          placeholder="Search by Github name"
          onChange={handleChange}
          value={text}
        ></input>
        <input
          onClick={handleSubmit}
          type="submit"
          className="btn btn-dark btn-block"
        ></input>
        {usersData.length > 0 ? (
          <button onClick={handleClear} className="btn btn-light btn-block">
            Clear
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Search;
