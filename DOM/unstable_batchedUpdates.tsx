import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  function handleClick() {
    // 1.React18前版本
    new Promise((resolve) => setTimeout(resolve)).then(() => {
      setA((a) => a + 1); // 触发re-render
      debugger;
      setA((a) => a + 1); // 再次触发re-render
    });
    // 2.React18前版本，使用unstable_batchedUpdates
    new Promise((resolve) => setTimeout(resolve)).then(() => {
      ReactDOM.unstable_batchedUpdates(() => {
        setB((b) => b + 1);
        debugger;
        setB((b) => b + 1);
      });
    });
  }

  return (
    <div>
      <h1>React.unstable_batchedUpdates</h1>
      <button onClick={handleClick}>
        {a}点击{b}
      </button>
    </div>
  );
};
