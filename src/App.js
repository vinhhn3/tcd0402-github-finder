import axios from "axios";
import { Component } from "react";
import "./App.css";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  state = {
    usersData: [],
    searchText: "",
  };

  searchUsers = (text) => {
    this.setState({
      searchText: text,
    });
    console.log("This is from App ...");
    console.log(this.state.searchText);
  };

  componentDidMount() {
    axios.get("https://api.github.com/users").then((response) => {
      this.setState({
        usersData: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
