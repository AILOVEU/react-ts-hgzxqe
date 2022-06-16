import * as React from 'react';
import Data from '../data';
export default () => {
  const callback = (
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载）或  "update" （如果它重渲染了）
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整棵子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions(追踪更新) 的集合
  ) => {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  };
  // 合计或
  return (
    <div>
      <div>
        <React.Profiler id="root" onRender={callback}>
          <Data />
        </React.Profiler>
      </div>
    </div>
  );
};
