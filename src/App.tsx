import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/theme/mode-toggle";
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <ModeToggle />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
