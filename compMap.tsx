import * as React from 'react';
import {
  ComponentComp,
  ForwardRefComp,
  FragmentComp,
  LazyComp,
  MemoComp,
  ProfilerComp,
  PureComponentComp,
  StricModeComp,
  SuspenseComp,
} from './Component';
import {
  CreateElement,
  CloneElement,
  CreateContext,
  IsValidElement,
  Children,
} from './Toolkit';

import {
  UseCallback,
  UseContext,
  UseDebugValue,
  UseEffect,
  UseImperativeHandle,
  UseLayoutEffect,
  UseMemo,
  UseRenducer,
  UseRef,
  UseState,
  UseTransition,
  UseDeferredValue,
  UseId,
} from './Hook';
import {
  CreatePortal,
  FindDOMNode,
  FlushSync,
  Hydrate,
  Render,
  UnmountComponentAtNode,
  UnstableBatchedUpdates,
} from './DOM';

export default {
  component: {
    Component: <ComponentComp />,
    PureComponentComp: <PureComponentComp />,
    memo: <MemoComp />,
    forwardRef: <ForwardRefComp />,
    lazy: <LazyComp />,
    Suspense: <SuspenseComp />,
    Fragment: <FragmentComp />,
    Profiler: <ProfilerComp />,
    StricMode: <StricModeComp />,
  },
  toolkit: {
    createElement: <CreateElement />,
    cloneElement: <CloneElement />,
    createContext: <CreateContext />,
    isValidElement: <IsValidElement />,
    children: <Children />,
  },
  hook: {
    useEffect: <UseEffect />,
    useState: <UseState />,
    useMemo: <UseMemo />,
    useCallback: <UseCallback />,
    useRef: <UseRef />,
    useLayoutEffect: <UseLayoutEffect />,
    useRenducer: <UseRenducer />,
    useContext: <UseContext />,
    useDebugValue: <UseDebugValue />,
    useImperativeHandle: <UseImperativeHandle />,
    useDeferredValue: <UseDeferredValue />,
    useTransition: <UseTransition />,
    useId: <UseId />,
  },
  dom: {
    render: <Render />,
    unmountComponentAtNode: <UnmountComponentAtNode />,
    findDOMNode: <FindDOMNode />,
    hydrate: <Hydrate />,
    createPortal: <CreatePortal />,
    unstable_batchedUpdates: <UnstableBatchedUpdates />,
    flushSync: <FlushSync />,
  },
};
