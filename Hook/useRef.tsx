import * as React from 'react';
export default () => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  const valueRef = React.useRef(null);
  valueRef.current = value;

  const handleClick = React.useCallback(() => {
    // 1.记录dom信息
    // console.log('input dom', inputRef.current);
    // 2.存储数据
    // console.log('valueRef', valueRef.current);
  }, []);

  const buttonCbRef = React.useCallback((node) => {
    if (node !== null) {
      console.log(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <h1>React.useRef</h1>
      {/* ref 标记当前dom节点 */}
      <input
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {/* button ref变化时（无->有）会执行，但button变化不会执行 */}
      <button ref={buttonCbRef} onClick={handleClick}>
        打印xxxxx{value}
      </button>
    </div>
  );
};
