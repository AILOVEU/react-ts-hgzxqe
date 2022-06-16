import * as React from 'react';

export default () => {
  // map遍历后的元素，react底层会处理，默认在外部嵌套一个<Fragment>

  return [1, 2, 3].map((item, index) => <div key={item + index}>{item}</div>);

  return (
    <React.Fragment>
      {[1, 2, 3].map((item, index) => (
        <span key={item + index}>{item}</span>
      ))}
    </React.Fragment>
  );
};
