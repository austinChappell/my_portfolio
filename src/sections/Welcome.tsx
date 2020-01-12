// External Dependencies
import React from 'react';

// Internal Dependencies
import Section from '../components/Section';
import {
  colors,
  ids,
} from '../constants';
import Text from '../components/Text';

// Component Definition
const Welcome: React.FC = () => {
  return (
    <Section
      backgroundColor={colors.black}
      id={ids.welcome}
    >
      <Text
        as="h1"
        fontColor="white"
        fontSize="xl"
      >
        Hi. I'm
        {' '}
        <Text
          as="span"
          fontColor="brand"
        >
          Austin
        </Text>
        ,
        <br />
        a Full-Stack Developer...
      </Text>
    </Section>
  )
}

export default Welcome;
