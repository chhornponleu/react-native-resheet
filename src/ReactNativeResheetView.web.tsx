import * as React from 'react';

import { ReactNativeResheetViewProps } from './ReactNativeResheet.types';

export default function ReactNativeResheetView(props: ReactNativeResheetViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
