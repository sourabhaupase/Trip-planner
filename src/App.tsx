import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <div>
      <Input placeholder="Enter email" />
      <Button size="sm">Click me</Button>
    </div>
  );
}

export default App;
