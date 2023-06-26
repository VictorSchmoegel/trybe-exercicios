import { useState } from 'react';

function HelloWorldFunction() {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: { counter }</h1>
      <button
        onClick={() => setCounter(counter + 1)}
      >
        Increase Counter
      </button>
    </div>
  );
}

export default HelloWorldFunction
