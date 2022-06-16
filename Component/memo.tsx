import * as React from 'react';
function TextMemo(props) {
  return <div>{new Date().getTime()}</div>;
}

// 值不相同或小于0不更新
const NewTextMemo = React.memo(TextMemo, (pre, next) => {
  if (pre.x === next.x) {
    return true;
  } else if (pre.x !== next.x && next.x < 0) {
    return true;
  } else {
    return false;
  }
});

export default () => {
  const [x, setX] = React.useState(0);
  return (
    <div>
      <h1>React.memo</h1>
      <div>
        <div>x 当前值 : {x}</div>
        <button onClick={() => setX(x + 1)}>+</button>
        <button onClick={() => setX(x - 1)}>-</button>
      </div>
      <NewTextMemo x={x} />
    </div>
  );
};
