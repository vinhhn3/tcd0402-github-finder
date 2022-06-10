import { Component } from "react";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    return (
      <div>
        <h1>Details User</h1>
        <p>Login Id: {this.props.user.login}</p>
      </div>
    );
  }
}

export default User;
