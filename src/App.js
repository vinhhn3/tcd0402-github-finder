import axios from "axios";
import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Navbar from "./layout/Navbar";

class App extends Component {
  state = {
    usersData: [],
  };

  searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      usersData: response.data.items,
    });
  };

  clearUsers = () => {
    this.setState({
      usersData: [],
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      usersData={this.state.usersData}
                      clearUsers={this.clearUsers}
                    />
                    <Users usersData={this.state.usersData} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
