import logo from "./logo.svg";
import "./App.css";
import Market from "./pages/market";
import Pr from "./components/pr/pr";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4">
      <Market />
      <Pr/>
      <Toaster />
    </div>
  );
}

export default App;
