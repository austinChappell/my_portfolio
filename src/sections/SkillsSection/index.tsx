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
import Skills from './Skills';

// Component Definition
const SkillsSection: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.white}
      id={ids.skills}
    >
      <Container>
        <SectionTitle>
          Skills
        </SectionTitle>

        <Skills />

        <Bio />
      </Container>
    </Section>
  )
}

export default SkillsSection;
