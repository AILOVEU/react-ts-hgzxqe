import * as React from 'react';
const getRandom1 = () => {
  console.log('执行1');
  return Math.random();
};
const getRandom2 = () => {
  console.log('执行2');
  return Math.random();
};
const Index = ({ value }) => {
  // 1. 返回值
  const [a, setA] = React.useState(getRandom1());
  // 2. 返回函数
  const [b, setB] = React.useState(() => {
    return getRandom2();
  });

  return (
    <div>
      <div>{new Date().getTime()}</div>
      <div>A: {a}</div>
      <div>B: {b}</div>
    </div>
  );
};

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <Index value={value} />
    </div>
  );
};
