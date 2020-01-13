// External Dependencies
import React from 'react';

// Internal Dependencies
import {
  IconName,
  iconData,
} from './svg-data';

// Local Typings
interface Props {
  color: 'white' | 'brand';
  name: IconName;
  size?: number;
}

// Component Definition
const Icon: React.FC<Props> = ({
  size = 24,
  ...props
}) => {
  const d = iconData[props.name];

  return (
    <svg
      style={{
        height: size,
        width: size,
      }}
      viewBox="0 0 24 24"
    >
      <path
        d={d}
        fill={props.color}
      />
    </svg>
  )
};

export default Icon;
