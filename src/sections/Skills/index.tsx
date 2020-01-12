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
const Skills: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.brandDark}
      id={ids.skills}
    >
      <SectionTitle light>
        Skills
      </SectionTitle>
    </Section>
  )
}

export default Skills;
