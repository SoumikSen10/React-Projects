import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) setCount(count + 1);
  };
  const removeValue = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <br />
      <h2>Count is : {count}</h2>
      <button onClick={addValue}>Increment count</button>
      <br />
      <button onClick={removeValue}>Decrement count</button>
    </div>
  );
}

export default App;
