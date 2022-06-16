import * as React from 'react';
import * as ReactDOM from 'react-dom';
const Content = () => {
  return <div style={{ color: 'red' }}>Render Content</div>;
};

export default () => {
  React.useLayoutEffect(() => {
    // 1.挂载
    ReactDOM.render(<Content />, document.getElementById('render_container'));
  }, []);
  const handleUnmount = React.useCallback(() => {
    // 2。卸载
    ReactDOM.unmountComponentAtNode(
      document.getElementById('render_container')
    );
  }, []);
  return (
    <div>
      <h1>React.unmountComponentAtNode</h1>
      <div id="render_container">{/* Content组件填充 */}</div>
      <button onClick={handleUnmount}>销毁红色文字</button>
    </div>
  );
};
