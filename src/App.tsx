import { useState } from "react";
import Celcius from "./components/Celcius";
import Farenheid from "./components/Farenheid";
function App() {
  const [temp, setTemp] = useState("");
  return (
    <>
      <Celcius toFarhrenheid={(temp) => (temp * 9) / 5 + 3}></Celcius>
      <Farenheid ToCelcius={(temp) => ((temp - 32) * 5) / 9}></Farenheid>{" "}
    </>
  );
}

export default App;
