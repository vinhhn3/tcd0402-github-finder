import { Component } from "react";
import "./App.css";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
