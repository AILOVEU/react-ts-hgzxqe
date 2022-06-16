import * as React from 'react';

const generateData = (value) => {
  return {
    data: Array(100000).fill(value),
  };
};
export default () => {
  const deferredCountRef = React.useRef(0);
  const dataCountRef = React.useRef(0);
  const [value, setValue] = React.useState('');

  // 1.input 会导致data更新
  const data = React.useMemo(() => {
    return generateData(value);
  }, [value]);

  // 2.对data进行包装生成副本
  const deferredData = React.useDeferredValue(data);

  // 3. deferredData更新次数小于data
  React.useEffect(() => {
    deferredCountRef.current += 1;
    console.log('deferredValue变化', deferredCountRef.current);
  }, [deferredData]);

  React.useEffect(() => {
    dataCountRef.current += 1;
    console.log('data变化', dataCountRef.current);
  }, [data]);

  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>{JSON.stringify(data)}</div>
      {/* <div>{JSON.stringify(deferredData)}</div> */}
    </div>
  );
};
