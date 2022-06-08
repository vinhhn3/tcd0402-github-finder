import { Component } from "react";
import "./App.css";
import UserItem from "./components/users/UserItem";
import Navbar from "./layout/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
      </div>
    );
  }
}

export default App;
