import { useState, useEffect } from "react";

const Forms = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  function handleOnClick(name) {
    if (name === "increase") {
      setCount((count) => count + 1);
      setFlag(true);
    } else if (name === "decrease") {
      setCount((count) => count - 1);
      setFlag(false);
    }
  }
  useEffect(() => {
    console.log("flag value is changed");
  }, [flag]); // jab bhi flag change hoga(chahe true ya false),
  // tab ye useeffect re-render hoga
  useEffect(() => {
    console.log("counter value is changed");
  }, [count]);
  useEffect(() => {
    console.log("I will come on every re-render");
  });
  useEffect(() => {
    console.log("I will come only once");
  }, []);
  return (
    <>
      <pre>
        {flag ? (
          <h3>Count value is increased</h3>
        ) : (
          <h3>Count value is decreased</h3>
        )}
      </pre>
      <p>`your count value is {count}`</p>
      <br />
      <button name="increase" onClick={() => handleOnClick("increase")}>
        Increament
      </button>
      <br />
      <br />
      <button name="decrease" onClick={() => handleOnClick("decrease")}>
        Decreament
      </button>
    </>
  );
};
export default Forms;
