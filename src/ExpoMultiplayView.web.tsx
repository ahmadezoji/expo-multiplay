import * as React from 'react';

import { ExpoMultiplayViewProps } from './ExpoMultiplay.types';

export default function ExpoMultiplayView(props: ExpoMultiplayViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
