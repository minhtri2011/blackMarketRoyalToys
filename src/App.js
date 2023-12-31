import logo from "./logo.svg";
import "./App.css";
import Market from "./pages/market";
import Pr from "./components/pr/pr";

function App() {
  return (
    <div className="p-4">
      <Market />
      <Pr/>
    </div>
  );
}

export default App;
