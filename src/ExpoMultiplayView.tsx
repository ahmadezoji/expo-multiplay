import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoMultiplayViewProps } from './ExpoMultiplay.types';

const NativeView: React.ComponentType<ExpoMultiplayViewProps> =
  requireNativeViewManager('ExpoMultiplay');

export default function ExpoMultiplayView(props: ExpoMultiplayViewProps) {
  return <NativeView {...props} />;
}
