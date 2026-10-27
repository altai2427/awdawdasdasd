import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>С траница не найдена!</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;