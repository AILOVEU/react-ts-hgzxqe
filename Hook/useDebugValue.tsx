import * as React from 'react';
import { Switch } from 'antd';

function useFriendStatus() {
  const [isOnline, setIsOnline] = React.useState(null);
  const handleClick = React.useCallback(() => {
    setIsOnline((val) => !val);
  }, []);
  // 在开发者工具中的这个 Hook 旁边显示标签
  // e.g. "FriendStatus: Offline"
  // React.useDebugValue(isOnline ? 'Online' : 'Offline');
  return <button onClick={handleClick}>改变状态{isOnline}</button>;
}
export default () => {
  const friendStatus = useFriendStatus();
  return (
    <div id="React-useDebugValue">
      <h1>React.useDebugValue</h1>
      <div>{friendStatus}</div>
    </div>
  );
};
