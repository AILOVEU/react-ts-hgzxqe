import * as React from 'react';
class Index extends React.Component {
  UNSAFE_componentWillReceiveProps() {}
  render() {
    return <div className="box" />;
  }
}

export default () => {
  return (
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
};
