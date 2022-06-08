import axios from "axios";
import { Component } from "react";
import "./App.css";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  state = {
    usersData: [],
  };

  componentDidMount() {
    console.log("App component is mounted ...");
    axios.get("https://api.github.com/users").then((response) => {
      console.log(response.data);
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
          <Users usersData={this.state.usersData} />
        </div>
      </div>
    );
  }
}

export default App;
