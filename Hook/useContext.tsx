import * as React from 'react';
const Context = React.createContext({ name: '', age: 0 });

/* 用useContext方式 */
const DemoContext1 = () => {
  const value: any = React.useContext(Context);
  /* my name is alien */
  return <div> my name is {value.name}</div>;
};

/* 用Context.Consumer 方式 */
const DemoContext2 = () => {
  return (
    <Context.Consumer>
      {/*  my name is alien  */}
      {(value) => <div> my name is {value.name}</div>}
    </Context.Consumer>
  );
};

export default () => {
  return (
    <div>
      <Context.Provider value={{ name: 'alien', age: 18 }}>
        <DemoContext1 />
        <DemoContext2 />
      </Context.Provider>
    </div>
  );
};
