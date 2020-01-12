// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';

// Component Definition
const Skills: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.secondaryDark}
      id={ids.skills}
    >
      Skills Section
    </Section>
  )
}

export default Skills;
