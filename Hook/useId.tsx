import * as React from 'react';

export default () => {
  const id = React.useId();
  const id2 = React.useId();

  return (
    <div>
      <h1>React.useId</h1>
      <div>{id}</div>
      <div>{id2}</div>

      <label htmlFor={id + '-firstName'}>First Name</label>
      <div>
        <input id={id + '-firstName'} type="text" />
      </div>
      <label htmlFor={id + '-lastName'}>Last Name</label>
      <div>
        <input id={id + '-lastName'} type="text" />
      </div>
    </div>
  );
};
