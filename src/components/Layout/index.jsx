import Navigation from "../Navigation";
import "./styles.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
    </div>
  );
}
