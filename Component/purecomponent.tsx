import * as React from 'react';
export default class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        age: 28,
      },
    };
  }
  handerClick = () => {
    const { data } = this.state;
    // 1.没有直接改变data
    data.age++;
    this.setState({ data });
    // 2.强制更新
    // this.forceUpdate();
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>React.PureComponent</h1>
        <div className="box">
          <div className="show">
            <div> 年龄： {data.age}</div>
            <button onClick={this.handerClick}>age++</button>
          </div>
        </div>
      </div>
    );
  }
}
