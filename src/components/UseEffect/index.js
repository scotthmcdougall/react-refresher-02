import React, { useRef, useEffect, useState } from "react";

export default function UseEffect() {

  const divRef = useRef();
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);


  // Will trigger on change of counter1 or counter, but not counter3
  useEffect(() => {
    console.log(divRef);
  }, [counter1, counter2]);

  return (
    <div ref={divRef}>
      <h1>Counter #1: {counter1}</h1>
      <button onClick={() => setCounter1(counter1 => counter1 + 1)}>Set Counter 1</button>

      <h1>Counter #2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 => counter2 + 1)}>Set Counter 2</button>

      <h1>Counter #3: {counter3}</h1>
      <button onClick={() => setCounter3(counter3 => counter3 + 1)}>Set Counter 3</button>

    </div>
  )

}
