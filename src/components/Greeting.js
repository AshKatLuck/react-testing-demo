import { useState } from "react";
const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <>
      <h1>Hello World!</h1>
      {!changeText && <p>nice to meet you</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
};

export default Greeting;
