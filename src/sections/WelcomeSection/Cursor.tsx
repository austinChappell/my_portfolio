// External Dependencies
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

// Internal Dependencies
import {
  colors,
  space,
} from '../../constants';

// Local Typings
interface LineProps {
  opacity: number;
}

// Local Variables
const Line = styled.span<LineProps>((props) => ({
  borderBottom: `2px solid ${colors.white}`,
  display: 'inline-block',
  marginLeft: space.xs,
  opacity: props.opacity,
  transition: '100ms',
  width: 20,
}));

// Component Definition
const Cursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 500);

    return () => {
      clearTimeout(interval);
    }
  }, [isVisible]);

  return (
    <Line opacity={isVisible ? 1 : 0} />
  )
}

export default Cursor;
