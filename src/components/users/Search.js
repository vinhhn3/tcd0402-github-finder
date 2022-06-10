import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
    console.log(this.state.text);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
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
        </form>
      </div>
    );
  }
}

export default Search;