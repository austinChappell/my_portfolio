// External Dependencies
import { CSSObject } from '@emotion/styled';
import React, { useState, useEffect } from 'react';

// Internal Dependencies
import {
  colors,
  space,
} from '../../constants';

// Local Typings
type FontColor = 'black' | 'white' | 'brand' | 'brandLight';
type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
interface Props {
  alignment?: 'left' | 'center' | 'right';
  as?: string;
  fontColor?: FontColor;
  fontSize?: FontSize;
  padding?: number;
  style?: CSSObject;
}

// Local Variables
const fontColors: {
  [k in FontColor]: string;
} = {
  black: colors.black,
  brand: colors.brand,
  brandLight: colors.brandLight,
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

function getCss(props: Props) {
  return {
    color: props.fontColor && fontColors[props.fontColor],
    fontSize: props.fontSize && fontSizes[props.fontSize],
    margin: 0,
    padding: `${props.padding}px 0`,
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
  padding = space.sm,
  style = {},
  ...props
}) => {
  const [css, setCss] = useState(getCss({
    alignment,
    fontColor,
    fontSize,
    padding,
  }));

  useEffect(() => {
    setCss(getCss({
      alignment,
      fontColor,
      fontSize,
      padding,
    }));
  }, [alignment, fontColor, fontSize, padding])

  return React.createElement(as, {
    children,
    ...props,
    style: {
      ...css,
      ...style,
    },
  })
}

export default Text;
