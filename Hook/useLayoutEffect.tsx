import * as React from 'react';
const getPositon = () => {
  return {
    x: Math.random(),
    y: Math.random(),
  };
};
export default () => {
  const target = React.useRef();
  React.useLayoutEffect(() => {
    /*dom绘制之前，移动dom到制定位置*/
    const { x, y } = getPositon();
    console.log('useLayoutEffect', target.current, { x, y });
  }, []);
  React.useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <div>
      <span ref={target} className="animate"></span>
    </div>
  );
};
