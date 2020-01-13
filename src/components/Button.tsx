// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import {
  colors,
  space,
} from '../constants';

// Component Definition
const Button = styled.button({
  border: `1px solid ${colors.white}`,
  backgroundColor: colors.brand,
  borderRadius: space.xs,
  color: colors.white,
  cursor: 'pointer',
  fontSize: 16,
  margin: space.xs,
  minWidth: 100,
  padding: `${space.sm}px ${space.md}px`,
  textAlign: 'center',

  '&:disabled': {
    backgroundColor: colors.gray70,
    cursor: 'auto',
  },

  '&:disabled:hover': {
    backgroundColor: colors.gray70,
  },

  '&:hover': {
    backgroundColor: `${colors.brand}dd`,
  },
});

export default Button;
