import Button from "../components/Button";
export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home Page</h2>
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
    </div>
  );
}
