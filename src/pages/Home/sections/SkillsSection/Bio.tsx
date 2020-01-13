// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../../../components/Text';

// Local Variables
const Grid = styled.div({
  display: 'grid',
  gridColumnGap: 20,
  gridTemplateColumns: 'auto auto',
});

// Component Definition
const Bio: React.FC = () => {
  return (
    <Grid>
      <Text
        as="p"
        fontSize="lg"
      >
        As a former music educator turned programmer, I have a unique set of skills you might not find most places you search. I spent years in the classroom teaching large groups of students, communicating regularly with parents, and managing a variety of responsibilities.
      </Text>

      <Text
        as="p"
        fontSize="lg"
      >
         In addition to these skills is my passion for writing clean, modern JavaScript (or TypeScript &#128526;). Whether developing web apps or mobile apps, everything I build will be functional, performant, and aesthetic on any device. 
      </Text>
    </Grid>
  )
}

export default Bio;
