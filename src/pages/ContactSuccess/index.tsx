// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  space,
} from '../../constants';
import Text from '../../components/Text';
import Container from '../../components/Container';

// Local Variables
const Wrapper = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '20vh',
});
const StyledLink = styled(Link)({
  border: `1px solid ${colors.white}`,
  color: colors.white,
  padding: space.sm,
  textDecoration: 'none',
  transition: '300ms',

  '&:hover': {
    backgroundColor: colors.white,
    color: colors.brand,
  },
});

// Component Definition
const ContactSuccess: React.FC = () => {
  return (
    <main>
      <Section
        backgroundColor={colors.brand}
        fullHeight
      >
        <Container>
          <Wrapper>
            <Text
              as="h2"
              fontColor="white"
              fontSize="xl"
            >
              Thank you!
            </Text>

            <Text
              as="p"
              fontColor="white"
              fontSize="lg"
            >
              I will get back to you soon.
            </Text>

            <StyledLink to="/">
              Go Back
            </StyledLink>
          </Wrapper>
        </Container>
      </Section>
    </main>
  );
}

export default ContactSuccess;
