// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import {
  colors,
  space,
} from '../constants';
import Text from './Text';
import Container from './Container';

// Local Variables
const StyledFooter = styled.footer({
  backgroundColor: colors.black,
  color: colors.white,
  padding: `${space.lg}px 0`
});

// Component Definition
const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Text alignment="center">
          &copy; Austin Chappell {new Date().getFullYear()}
        </Text>
      </Container>
    </StyledFooter>
  )
}

export default Footer;
