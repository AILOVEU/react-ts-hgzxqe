import * as React from 'react';
import { Spin } from 'antd';
import Data from '../data';
const LazyComponent = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => <Data />,
        });
      }, 2000);
    })
);

export default () => {
  // 懒加载
  return (
    <div>
      <h1>React.lazy</h1>
      <React.Suspense fallback={<Spin />}>
        <LazyComponent />
      </React.Suspense>
    </div>
  );
};
