import * as React from 'react';
import { Spin } from 'antd';

export default () => {
  const Data = React.lazy(() => import('../data')); // 懒加载
  return (
    <div>
      <h1>React.Suspense</h1>
      <React.Suspense fallback={<Spin />}>
        <Data />
      </React.Suspense>
    </div>
  );
};
