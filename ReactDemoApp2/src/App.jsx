import "./App.css";

import Card from "./components/Card";
import infos from "./Data/cardData";

function App() {
  return (
    <>
      {infos.map((info) => (
        <Card username={info.username} social={info.social} />
      ))}
    </>
  );
}

export default App;
