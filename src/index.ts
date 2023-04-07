import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeResheet.web.ts
// and on native platforms to ReactNativeResheet.ts
import ReactNativeResheetModule from './ReactNativeResheetModule';
import ReactNativeResheetView from './ReactNativeResheetView';
import { ChangeEventPayload, ReactNativeResheetViewProps } from './ReactNativeResheet.types';

// Get the native constant value.
export const PI = ReactNativeResheetModule.PI;

export function hello(): string {
  return ReactNativeResheetModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeResheetModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeResheetModule ?? NativeModulesProxy.ReactNativeResheet);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeResheetView, ReactNativeResheetViewProps, ChangeEventPayload };
