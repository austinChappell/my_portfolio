// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';
import SectionTitle from '../../components/SectionTitle';

// Component Definition
const Contact: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.brandDark}
      id={ids.contact}
    >
      <SectionTitle light>
        Contact
      </SectionTitle>
    </Section>
  )
}

export default Contact;
