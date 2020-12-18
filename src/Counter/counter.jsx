import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
        <h3>{count}</h3>
        <span>
            <button id="count-up" type="button" onClick={() => setCount(count + 1)}>Count Up</button>
            <button id="count-down" type="button" onClick={() => setCount(count - 1)}>Count Down</button>      
        </span>
    </>
  );
}

export default Counter;