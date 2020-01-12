// External Dependencies
import React, { useState, useEffect } from 'react';
import { colors, space } from '../../constants';

// Local Typings
type FontColor = 'black' | 'white' | 'brand';
type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface Props {
  as?: string;
  fontColor?: FontColor;
  fontSize?: FontSize;
}

// Local Variables
const fontColors: {
  [k in FontColor]: string;
} = {
  black: colors.black,
  brand: colors.brand,
  white: colors.white,
};
const fontSizes: {
  [k in FontSize]: number;
} = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

function getStyle(props: Props) {
  return {
    color: props.fontColor && fontColors[props.fontColor],
    fontSize: props.fontSize && fontSizes[props.fontSize],
    margin: 0,
    padding: `${space.sm}px 0`,
  };
}

// Component Definition
const Text: React.FC<Props> = ({
  as = 'p',
  children,
  fontColor,
  fontSize,
  ...props
}) => {
  const [style, setStyle] = useState(getStyle({
    fontColor,
    fontSize,
  }));

  useEffect(() => {
    setStyle(getStyle({
      fontColor,
      fontSize,
    }));
  }, [fontColor, fontSize])

  return React.createElement(as, {
    children,
    ...props,
    style,
  })
}

export default Text;
