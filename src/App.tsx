import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

function App() {
  return (
    <div>
      <Input placeholder="Enter email" />
      <Button size="sm">Click me</Button>
      <br />
      <Link to="/signup">Sign up</Link>
      <br />
      <Link to="/signin">Sign In</Link>
    </div>
  );
}

export default App;
