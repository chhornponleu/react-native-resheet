import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeResheetViewProps } from './ReactNativeResheet.types';

const NativeView: React.ComponentType<ReactNativeResheetViewProps> =
  requireNativeViewManager('ReactNativeResheet');

export default function ReactNativeResheetView(props: ReactNativeResheetViewProps) {
  return <NativeView {...props} />;
}
