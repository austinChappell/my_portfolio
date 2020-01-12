// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Section from '../components/Section';
import {
  colors,
  ids,
} from '../constants';
import Text from '../components/Text';

// Local Variables
const StyledSection = styled(Section)({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

// Component Definition
const Welcome: React.FC = () => {
  return (
    <StyledSection
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
    </StyledSection>
  )
}

export default Welcome;
