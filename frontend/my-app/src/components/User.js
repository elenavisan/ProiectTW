import { Link } from "react-router-dom";
import "./User.css";

function User(props) {
  const { item } = props;

  return (
    <div className="user">
      <div className="name">{item.name}</div>
      <div className="status">{item.status}</div>
      <div className="aliments">
        <Link to={`/users/${item.id}/aliments`}> See aliments... </Link>
      </div>
    </div>
  );
}

export default User;
