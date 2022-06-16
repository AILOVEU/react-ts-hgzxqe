import * as React from 'react';

export default () => {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const bRef = React.useRef(b);
  bRef.current = b;

  React.useEffect(() => {
    console.log(`A:${a},B: ${bRef.current}`);
  }, [a]);

  return (
    <div>
      <h1>React.useEffect</h1>
      <span>输入A：</span>
      <input
        onChange={(e) => {
          setA(e.target.value);
        }}
      />
      <br />
      <span>输入B：</span>
      <input
        onChange={(e) => {
          setB(e.target.value);
        }}
      />
    </div>
  );
};
