import "./App.css";
import { connectLit } from "./tools/connection";

function App() {
  return (
    <div>
      <button
        type="button"
        onClick={connectLit}
        style={{ marginTop: 50, marginLeft: 50 }}
      >
        Connect Lit Network
      </button>
    </div>
  );
}

export default App;
