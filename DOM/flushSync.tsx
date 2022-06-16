import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  // 1.期间DOM会刷新
  function handleClick() {
    console.log('A', a);
    ReactDOM.flushSync(() => {
      console.log('B', a);
      setA((a) => a + 1);
    });
    console.log('C', a);
    debugger;
    setA((a) => {
      // 在E之后执行
      console.log('D', a);
      return a + 1;
    });
    ReactDOM.flushSync(() => {
      console.log('E', a);
      debugger;
      setA((a) => a + 1);
    });
    debugger;
    console.log('F', a);
  }
  // 2.期间DOM不会刷新
  function handleClick2() {
    setB((b) => b + 1);
    debugger;
    setB((b) => b + 1);
  }
  return (
    <div>
      <h1>React.flushSync</h1>
      <button onClick={handleClick}>点击{a}</button>
      <button onClick={handleClick2}>点击{b}</button>
    </div>
  );
};
