// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import {
  colors,
  space,
} from '../constants';

// Component Definition
const Button = styled.button({
  border: 'none',
  backgroundColor: colors.brand,
  borderRadius: space.xs,
  color: colors.white,
  fontSize: 16,
  margin: space.xs,
  minWidth: 100,
  padding: `${space.sm}px ${space.md}px`,
  textAlign: 'center',

  '&:disabled': {
    backgroundColor: colors.gray70,
  },

  '&:hover': {
    backgroundColor: `${colors.brand}dd`,
  },
});

export default Button;
