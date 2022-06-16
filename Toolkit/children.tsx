import * as React from 'react';

const Text = () => <div>hello,world</div>;

function WarpComponent1({ children }) {
  console.group('wrap1');
  console.log(children);
  console.groupEnd();
  return children;
}
function WarpComponent2({ children }) {
  console.group('wrap2');
  console.group('props.children');
  console.log(children);
  console.groupEnd();
  console.group('map');
  const mapChildren = React.Children.map(children, (item) => item);
  console.log(mapChildren);
  console.groupEnd();
  console.group('forEach');
  React.Children.forEach(children, (item, index) => console.log(index, item));
  console.groupEnd();
  console.group('count');
  console.log(React.Children.count(children));
  console.groupEnd();
  console.groupEnd();
  return children;
}
function WarpComponent3({ children }) {
  console.group('wrap3');
  console.group('props.children');
  console.log(children);
  console.groupEnd();
  console.group('map');
  const mapChildren = React.Children.map(children, (item) => item);
  console.log(mapChildren);
  console.groupEnd();
  console.group('toArray');
  const flatChildren = React.Children.toArray(children);
  console.log(flatChildren);
  console.groupEnd();
  console.groupEnd();
  return children;
}
function WarpComponent4({ children }) {
  // 验证是否只有一个子节点
  console.log(React.Children.only(children));
  return children;
}
export default () => {
  return (
    <div style={{ marginTop: '50px' }}>
      <h1>React.Children</h1>
      <WarpComponent1>
        <Text />
        <Text />
        <Text />
        <span>hello,world</span>
      </WarpComponent1>
      <div>------分割线------</div>
      <WarpComponent2>
        {/* <React.Fragment>
          <Text />
          <Text />
          <Text />
        </React.Fragment> */}
        {new Array(3).fill(0).map((_, index) => (
          <Text key={index} />
        ))}
        <span>hello,world</span>
      </WarpComponent2>
      <div>------分割线------</div>
      <WarpComponent3>
        {/* <React.Fragment>
          <React.Fragment>
            <Text />
            <Text />
            <React.Fragment>
              <Text />
            </React.Fragment>
          </React.Fragment>
        </React.Fragment> */}
        {new Array(3)
          .fill(0)
          .map((_, index) =>
            new Array(2)
              .fill(1)
              .map((_, index1) => <Text key={`Start_${index}_${index1}_End`} />)
          )}
        <span>hello,world</span>
      </WarpComponent3>
      <div>------分割线------</div>
      <WarpComponent4>
        <Text />
        {/* <Text /> */}
      </WarpComponent4>
    </div>
  );
};
