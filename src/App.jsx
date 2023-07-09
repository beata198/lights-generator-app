import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="counters">
        <p>0 bulbs</p>
        <Counter text="rows" count={0} />
        <Counter text="coulumns" count={0} />
      </div>
    </>
  );
}

export default App;
