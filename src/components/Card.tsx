// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import {
  colors,
  space,
} from '../constants';

// Component Definition
const Card = styled.div({
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray10}`,
  borderRadius: space.xs,
  boxShadow: `2px 2px 8px ${colors.black}22`,
  padding: space.lg,
});

export default Card;
