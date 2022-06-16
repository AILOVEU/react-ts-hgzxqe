import * as React from 'react';
const Text = ({ mes }) => {
  return <div>{mes}</div>;
};

export default () => {
  // return (
  //   <div>
  //     <h1>React.createElement</h1>
  //     <div className="box">
  //       <div className="item">生命周期</div>
  //       <Text mes="hello,world" />
  //       <React.Fragment> Flagment </React.Fragment>
  //       {/*  */}
  //       text文本
  //     </div>
  //   </div>
  // );

  return React.createElement(
    'div',
    { className: 'box' },
    React.createElement(
      'div',
      { className: 'item' },
      '\u751F\u547D\u5468\u671F'
    ),
    React.createElement(Text, { mes: 'hello,world' }),
    React.createElement(React.Fragment, null, ' Flagment '),
    'text\u6587\u672C'
  );
};
