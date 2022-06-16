import * as React from 'react';
const Text = () => <div>hello,world</div>;

const WarpComponent = ({ children }) => {
  return children.filter((item) => React.isValidElement(item));
};

export default () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <h1>React.isValidElement</h1>
      <WarpComponent>
        <Text />
        <div> my name is alien </div>
        Let's learn react together!(会被删除)
      </WarpComponent>
    </div>
  );
};
