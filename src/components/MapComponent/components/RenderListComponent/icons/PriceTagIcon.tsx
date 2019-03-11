import React from 'react';
import { Svg } from 'expo';

const { G, Rect, Path, Circle } = Svg;

export const PriceTagIcon = (props: object) => (
  <Svg width={16} height={16} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FFF" width={16} height={16} rx={1} />
      <G transform="translate(.8 .8)">
        <Path
          stroke="#A3BBD1"
          strokeWidth={1.2}
          strokeLinecap="round"
          d="M.45.45H6.3l7.65 7.65-5.85 5.85L.45 6.3z"
        />
        <Circle fill="#A3BBD1" cx={3.6} cy={3.6} r={1} />
        <Path
          d="M7.65 5.85l2.7 2.7M5.85 7.65l2.7 2.7"
          stroke="#A3BBD1"
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </G>
    </G>
  </Svg>
);
