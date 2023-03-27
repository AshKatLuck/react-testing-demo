import { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <>
      <h1>Hello World!</h1>
      {!changeText && <Output>nice to meet you</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
