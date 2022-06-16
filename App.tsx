import * as React from 'react';
import EventButton from './EventButton';
import compMap from './compMap';
import { Tag, Tabs } from 'antd';
const values = {
  ...compMap.component,
  ...compMap.toolkit,
  ...compMap.hook,
  ...compMap.dom,
};
import './style.css';

export default function App() {
  const [panelNode, setPanelNode] = React.useState(<div></div>);
  const [tab, setTab] = React.useState('Component');
  const click = React.useCallback((tab) => {
    setPanelNode(values?.[tab] || values['Fragment']);
  }, []);

  return (
    <div>
      <div>
        {Object.keys(compMap.component).map((item) => {
          return (
            <EventButton color="lime" key={item} title={item} click={click} />
          );
        })}
        <br />
        {Object.keys(compMap.toolkit).map((item) => {
          return (
            <EventButton
              color="volcano"
              key={item}
              title={item}
              click={click}
            />
          );
        })}
        <br />
        {Object.keys(compMap.hook).map((item) => {
          return (
            <EventButton color="cyan" key={item} title={item} click={click} />
          );
        })}
        <br />
        {Object.keys(compMap.dom).map((item) => {
          return (
            <EventButton color="orange" key={item} title={item} click={click} />
          );
        })}
      </div>
      <div style={{ margin: 12 }}>{panelNode}</div>
    </div>
  );
}
