import * as React from 'react';

export default () => {
  const [value, setValue] = React.useState();
  const handle = React.useCallback(() => {
    return 'name: ' + value;
  }, [value]);

  React.useEffect(() => {
    console.log('方法改变');
  }, [handle]);
  return (
    <div>
      <h1>React.useCallback</h1>
      姓名:
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
