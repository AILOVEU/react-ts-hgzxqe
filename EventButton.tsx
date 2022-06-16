import * as React from 'react';
import compMap from './compMap';
import { Tag } from 'antd';
export default ({ title, click, color }) => {
  return (
    <Tag color={color}>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          click(title);
        }}
      >
        {title}
      </div>
    </Tag>
  );
};
