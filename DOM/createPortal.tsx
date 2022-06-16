import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Tabs } from 'antd';

const Module1 = () => {
  const [PortalComponent, setPortalComponent] = React.useState(null);
  React.useEffect(() => {
    setPortalComponent(
      // 2.创建Portal，DOM节点覆盖
      ReactDOM.createPortal(
        <div>Module1 Extra</div>,
        document.querySelector('#tab_bar_extra')
      )
    );
  }, []);
  return (
    <div>
      {PortalComponent}
      <div>Module1</div>
    </div>
  );
};
const Module2 = () => {
  const [PortalComponent, setPortalComponent] = React.useState(null);
  React.useEffect(() => {
    setPortalComponent(
      ReactDOM.createPortal(
        <div>Module2 Extra</div>,
        document.querySelector('#tab_bar_extra')
      )
    );
  }, []);
  return (
    <div>
      {PortalComponent}
      Module2
    </div>
  );
};

const TAB_LIST = [
  { name: 'TAB1', value: '1', module: <Module1 /> },
  { name: 'TAB2', value: '2', module: <Module2 /> },
];

export default () => {
  return (
    <Tabs
      destroyInactiveTabPane
      // 1.实现子组件挂载元素到该容器下
      tabBarExtraContent={<div id="tab_bar_extra"></div>}
    >
      {TAB_LIST.map((item) => (
        <Tabs.TabPane key={item.value} tab={item.name} value={item.value}>
          {item.module}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
