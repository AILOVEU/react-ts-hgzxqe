import * as React from 'react';

function FatherComponent({ children }) {
  // 2.clone时多增加age属性
  const newChildren = React.cloneElement(children, { age: 18 });
  return <div> {newChildren} </div>;
}

export default () => {
  return (
    <div>
      <h1>React.cloneElement</h1>
      <div className="box">
        <FatherComponent>
          {/* 1.只传递了name属性 */}
          <SonComponent name="alien" />
        </FatherComponent>
      </div>
    </div>
  );
};

function SonComponent(props) {
  // 3.接收到name和age属性
  return <div>{JSON.stringify(props)}</div>;
}
