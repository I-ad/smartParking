import React from 'react';
import { Svg } from 'expo';

const { G, Rect, Path, Circle } = Svg;

export const NotAvailablePinIcon = (props: object) => (
  <Svg width={16} height={16} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FFF" width={16} height={16} rx={1} />
      <G
        transform="translate(.8 .8)"
        stroke="#A7BACC"
        strokeLinecap="round"
        strokeWidth={1.2}
      >
        <Path d="M5.4 13.95S.45 9.45.45 5.4a4.95 4.95 0 0 1 9.818-.9" />
        <Circle cx={5.4} cy={5.4} r={1.35} />
        <Circle cx={10.35} cy={10.35} r={3.6} />
        <Path d="M8.55 10.35h3.6" />
      </G>
    </G>
  </Svg>
);
