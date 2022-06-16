import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default () => {
  const nodeRef = React.useRef();
  React.useEffect(() => {
    // 1. 通过findDOMNode方式
    const node = ReactDOM.findDOMNode(document.querySelector('#container'));
    if (node) {
      node.style.color = 'red';
    }
    setTimeout(() => {
      // 2. 通过Ref方式
      nodeRef.current.style.color = 'orange';
    }, 2000);
  }, []);
  return (
    <div>
      <h1>React.findDOMNode</h1>
      <div id="container" ref={nodeRef}>
        Container
      </div>
    </div>
  );
};
