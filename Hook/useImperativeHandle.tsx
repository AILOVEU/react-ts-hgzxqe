import * as React from 'react';

const Son = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    /* 声明方法用于聚焦input框 */
    onFocus() {
      inputRef.current.focus();
    },
    /* 声明方法用于改变input的值 */
    onClear() {
      setValue('');
    },
  }));
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      ref={inputRef}
    />
  );
});

export default () => {
  const node = React.useRef(null);
  return (
    <div>
      <h1>React.useImperativeHandle</h1>
      <Son ref={node} />
      <button
        onClick={() => {
          node.current?.onFocus();
        }}
      >
        聚焦
      </button>
      <button
        onClick={() => {
          node.current?.onClear();
        }}
      >
        清空
      </button>
    </div>
  );
};
