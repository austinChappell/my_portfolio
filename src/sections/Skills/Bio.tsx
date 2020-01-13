// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../components/Text';

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
        As a former music educator turned programmer, I have a unique set of skills you might not find most places you search. I spent years in the classroom in front of large groups of students, communicating regularly with parents, and managing a variety of tasks simultaneously. In addition to these skills is my passion for writing clean, modern JavaScript (or TypeScript &#128526;).
      </Text>

      <Text
        as="p"
        fontSize="lg"
      >
        In today's world of portable technology, it is critical that sites are created using responsive web design. Whether building web apps or mobile apps, everything I build will be functional and aesthetic on any device. 
      </Text>
    </Grid>
  )
}

export default Bio;
