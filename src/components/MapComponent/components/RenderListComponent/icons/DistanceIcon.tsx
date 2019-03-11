import React from 'react';
import { Svg } from 'expo';

const { G, Rect, Path, Circle } = Svg;

export const DistanceIcon = (props: object) => (
  <Svg width={16} height={16} {...props}>
    <G fill="none" fillRule="evenodd">
      <Rect fill="#FFF" width={16} height={16} rx={1} />
      <G transform="translate(.8 .8)">
        <Path
          d="M3.15 10.35a3.6 3.6 0 0 0 3.6 3.6M3.15 7.65c1.8-2.006 2.7-3.506 2.7-4.5a2.7
           2.7 0 0 0-5.4 0c0 .995.9 2.495 2.7 4.5z"
          stroke="#A3BBD1"
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <Circle fill="#A3BBD1" cx={10.35} cy={7.65} r={1.35} />
        <Circle fill="#A3BBD1" cx={3.15} cy={3.15} r={1} />
        <Path
          d="M10.35 13.5c2.4-2.574 3.6-4.524 3.6-5.85a3.6 3.6 0 1 0-7.2 0c0 1.326 1.2 3.276 3.6 5.85z"
          stroke="#A3BBD1"
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </G>
    </G>
  </Svg>
);
