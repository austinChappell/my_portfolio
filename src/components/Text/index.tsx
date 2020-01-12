// External Dependencies
import React, { useState, useEffect } from 'react';
import { colors, space } from '../../constants';

// Local Typings
type FontColor = 'black' | 'white' | 'brand';
type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface Props {
  alignment?: 'left' | 'center' | 'right';
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
  xxl: 32,
};

function getStyle(props: Props) {
  return {
    color: props.fontColor && fontColors[props.fontColor],
    fontSize: props.fontSize && fontSizes[props.fontSize],
    margin: 0,
    padding: `${space.sm}px 0`,
    textAlign: props.alignment,
  };
}

// Component Definition
const Text: React.FC<Props> = ({
  alignment = 'left',
  as = 'p',
  children,
  fontColor,
  fontSize,
  ...props
}) => {
  const [style, setStyle] = useState(getStyle({
    alignment,
    fontColor,
    fontSize,
  }));

  useEffect(() => {
    setStyle(getStyle({
      alignment,
      fontColor,
      fontSize,
    }));
  }, [alignment, fontColor, fontSize])

  return React.createElement(as, {
    children,
    ...props,
    style,
  })
}

export default Text;
