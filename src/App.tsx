import { useState } from "react";
import Celcius from "./components/Celcius";
import Farenheid from "./components/Farenheid";
function App() {
  const [temp, setTemp] = useState(0);
  return (
    <>
      <Celcius Temp={temp}></Celcius>
      <Farenheid Temp={temp}></Farenheid>{" "}
    </>
  );
}

export default App;
