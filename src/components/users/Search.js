import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onClear = (e) => {
    e.preventDefault();
    this.setState({
      text: "",
    });
    this.props.clearUsers();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            name="text"
            type="text"
            placeholder="Search by Github name"
            onChange={this.onChange}
            value={this.state.text}
          ></input>
          <input
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-dark btn-block"
          ></input>
          {this.props.usersData.length > 0 ? (
            <button onClick={this.onClear} className="btn btn-light btn-block">
              Clear
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default Search;
