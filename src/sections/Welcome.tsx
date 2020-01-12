// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../components/Section';
import { ids } from '../constants';

// Component Definition
const Welcome: React.FC = () => {
  return (
    <Section id={ids.welcome}>
      Welcome Section
    </Section>
  )
}

export default Welcome;
