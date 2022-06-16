import * as React from 'react';
function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <Wrap forwardedRef={ref} {...props} />;
  });
}

// 2.被包裹的类组件
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }
  setColor(color) {
    this.setState({
      color: color,
    });
  }
  render() {
    return <div style={{ color: this.state.color }}>hello,world</div>;
  }
}

const HocIndex = HOC(Index);

export default () => {
  const node = React.useRef(null);
  // 1. 外部组件获取HOC包裹组件的实例
  const handleColor = React.useCallback(() => {
    node.current.setColor('red');
  }, []);

  return (
    <div>
      <h1>React.forwardedRef</h1>
      <button onClick={handleColor}>设置颜色为红色</button>
      <HocIndex ref={node} />
    </div>
  );
};
