import "./App.css";
import Counter from "./components/Counter";
import SingleLight from "./components/SingleLight";

function App() {
  return (
    <>
      <div className="counters">
        <p>0 bulbs</p>
        <Counter text="rows" count={0} />
        <Counter text="columns" count={0} />
      </div>
      <SingleLight />
    </>
  );
}

export default App;
