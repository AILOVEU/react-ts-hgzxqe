import * as React from 'react';
import * as ReactDOM from 'react-dom';
const Content = () => {
  return <div style={{ color: 'red' }}>Render Content</div>;
};
export default () => {
  React.useLayoutEffect(() => {
    // 将Content挂载到id对应节点上
    const container = ReactDOM.render(
      <Content />,
      document.getElementById('render_container')
    );
  }, []);
  return (
    <div>
      <h1>React.render</h1>
      <div id="render_container"></div>
    </div>
  );
};
