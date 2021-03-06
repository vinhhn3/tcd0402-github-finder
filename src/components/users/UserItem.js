import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        style={{ width: "60px" }}
        alt="avatar"
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-primary btn-sm">
        More
      </Link>
    </div>
  );
};

export default UserItem;
