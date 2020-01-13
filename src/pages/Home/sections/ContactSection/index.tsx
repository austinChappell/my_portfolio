// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../../../components/Section';
import {
  colors,
  ids,
} from '../../../../constants';
import SectionTitle from '../../../../components/SectionTitle';
import ContactForm from './ContactForm';

// Component Definition
const ContactSection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.brandDark}
      id={ids.contact}
    >
      <SectionTitle light>
        Contact
      </SectionTitle>

      <ContactForm />
    </Section>
  )
}

export default ContactSection;
