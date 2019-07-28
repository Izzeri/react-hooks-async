import * as React from 'react';
import { useState } from 'react';

import CalcFib from './CalcFib';

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      count: {count}
      <button type="button" onClick={() => setCount(count + 1)}>+1</button>
      <button type="button" onClick={() => setCount(count - 1)}>-1</button>
      <CalcFib count={count} />
    </div>
  );
};

export default App;
