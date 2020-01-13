// External Dependencies
import React from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import Section from '../../../../components/Section';
import {
  colors,
  ids,
  space,
} from '../../../../constants';
import SectionTitle from '../../../../components/SectionTitle';
import Container from '../../../../components/Container';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

const Flex = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
});
const Link = styled.a({
  border: `1px solid ${colors.white}`,
  borderRadius: space.xs,
  color: colors.white,
  margin: space.xs,
  minWidth: 100,
  padding: space.xs,
  textAlign: 'center',
  textDecoration: 'none',
  transition: '300ms',

  '&:hover': {
    backgroundColor: `${colors.brand}dd`,
  },

  '&:visited': {
    color: colors.white,
  },
});

// Component Definition
const ContactSection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.brandDark}
      id={ids.contact}
    >
      <Container>
        <Flex>
          <SectionTitle light>
            Contact
          </SectionTitle>

          <ContactForm />

          <SocialMedia />

          <Link href="/chappell-resume.pdf">
            Resume
          </Link>
        </Flex>
      </Container>
    </Section>
  )
}

export default ContactSection;
