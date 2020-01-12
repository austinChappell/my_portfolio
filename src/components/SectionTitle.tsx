// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from './Text';
import { space } from '../constants';

// Local Variables
const StyledText = styled(Text)({
  paddingTop: space.lg,
});

// Component Definition
const SectionTitle: React.FC = (props) => (
  <StyledText
    alignment="center"
    as="h2"
    fontColor="secondary"
    fontSize="xxl"
    padding={space.xl}
  >
    {props.children}
  </StyledText>
);

export default SectionTitle;