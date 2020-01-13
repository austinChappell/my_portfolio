// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';
import SectionTitle from '../../components/SectionTitle';
import Container from '../../components/Container';
import Bio from './Bio';

// Component Definition
const Skills: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.white}
      id={ids.skills}
    >
      <Container>
        <SectionTitle>
          Skills
        </SectionTitle>

        <Bio />
      </Container>
    </Section>
  )
}

export default Skills;
