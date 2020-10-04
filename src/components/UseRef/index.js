import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UseRef() {

  const h2Ref = useRef();
  const [counter, setCounter] = useState(0);

  // This fires before the h2 is mounted (undefined) - alos fires twice in dev mode when <React.StrictMode> enabled
  //console.log(h2Ref);
  //console.log('\n');

  // Trigger only on first mount
  useEffect(() => {
    console.log('first mount...');
    console.log(h2Ref);
    console.log('\n');
  }, []);

  // Trigger on any change of counter
  useEffect(() => {
    console.log('counter changed...');
    console.log(h2Ref);
    console.log('\n');

  }, [counter]);
  
  return (
    <>
      <h1>UseRef</h1>
      <h2 ref={h2Ref} onClick={() => setCounter(counter => counter + 1)}>This is the h2 ref. [Click counter...] = { counter }</h2>
      <h3>Link to <Link to="/">Root</Link></h3>
    </>
  );
  
}