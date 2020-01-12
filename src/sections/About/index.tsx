// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';

// Component Definition
const About: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.gray05}
      id={ids.about}
    >
      About Section
    </Section>
  )
}

export default About;
