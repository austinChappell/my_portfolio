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
const About: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.gray05}
      id={ids.about}
    >
      <SectionTitle>
        About
      </SectionTitle>
    </Section>
  )
}

export default About;
