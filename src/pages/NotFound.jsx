import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#6b7280" }}>
        404
      </h1>
      <h2 style={{ marginBottom: "2rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem", color: "#6b7280" }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}
