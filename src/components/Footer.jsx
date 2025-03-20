import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div id="footer">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link>
    </div>
  );
}