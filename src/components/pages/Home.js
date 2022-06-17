import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Search from "../users/Search";
import User from "../users/User";
import Users from "../users/Users";
import About from "./About";
import NotFound from "./NotFound";

function Home() {
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
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/user/:login"
              render={(props) => <User {...props} />}
            />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
