import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoMultiplay.web.ts
// and on native platforms to ExpoMultiplay.ts
import ExpoMultiplayModule from './ExpoMultiplayModule';
import ExpoMultiplayView from './ExpoMultiplayView';
import { ChangeEventPayload, ExpoMultiplayViewProps } from './ExpoMultiplay.types';

// Get the native constant value.
export const PI = ExpoMultiplayModule.PI;

export function hello(): string {
  return ExpoMultiplayModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoMultiplayModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoMultiplayModule ?? NativeModulesProxy.ExpoMultiplay);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoMultiplayView, ExpoMultiplayViewProps, ChangeEventPayload };
