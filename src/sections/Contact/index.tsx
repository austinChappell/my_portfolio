// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';

// Component Definition
const Contact: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.secondaryDark}
      id={ids.contact}
    >
      Contact Section
    </Section>
  )
}

export default Contact;
