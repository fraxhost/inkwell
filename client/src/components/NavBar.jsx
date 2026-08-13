import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex justify-between border-b p-4">
      <Link to="/" className="font-bold">
        Inkwell
      </Link>

      <Link to="/write">Write</Link>
    </nav>
  );
}
