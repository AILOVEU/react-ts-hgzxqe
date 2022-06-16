import * as React from 'react';
const MyContext = React.createContext({});
function ComponentB() {
  // 用 Consumer 订阅， 来自 Provider 中 value 的改变
  return (
    <MyContext.Consumer>
      {(value) => <ComponentA {...value} />}
    </MyContext.Consumer>
  );
}
function ComponentA(props) {
  const { name, mes } = props;
  return (
    <div>
      <div> 姓名： {name} </div>
      <div> 想对大家说： {mes} </div>
    </div>
  );
}
export default () => {
  const [value, setValue] = React.useState({
    name: 'alien',
    mes: 'let us learn React ',
  });
  return (
    <div>
      <h1>React.createContext</h1>
      <div style={{ marginTop: '50px' }}>
        <MyContext.Provider value={value}>
          <ComponentB />
        </MyContext.Provider>
      </div>
    </div>
  );
};
