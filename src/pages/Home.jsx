import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/profile");
  }

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the React starter template!</p>
      <Button onClick={handleClick}>Navigate To Profile</Button>
    </div>
  );
}
