import * as React from 'react';

export default () => {
  const [value, setValue] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState([]);
  // 1.创建一个transition
  const [isPending, startTransition] = React.useTransition();

  const handleChange = (e) => {
    setValue(e.target.value);
    //2. 执行start
    startTransition(() => {
      setSearchQuery(Array(10000).fill(e.target.value));
      console.log('设置searchQuery', e.target.value);
    });
  };
  React.useEffect(() => {
    // 3.连续输入，只打印一次
    console.log('new searchQuery');
  }, [searchQuery]);
  return (
    <div>
      <input value={value} onChange={handleChange} />
      {isPending ? (
        <p>loading ....</p>
      ) : (
        searchQuery.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
};
