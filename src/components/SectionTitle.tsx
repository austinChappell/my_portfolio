// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from './Text';
import { space } from '../constants';

// Local Typings
interface Props {
  light?: boolean;
}

// Local Variables
const StyledText = styled(Text)({
  paddingTop: space.lg,
});

// Component Definition
const SectionTitle: React.FC<Props> = (props) => (
  <StyledText
    alignment="center"
    as="h2"
    fontColor={props.light ? 'white' : 'brand'}
    fontSize="xxl"
    padding={space.xl}
  >
    {props.children}
  </StyledText>
);

export default SectionTitle;