// External Dependencies
import React from 'react';

// Internal Dependencies
import Text from './Text';

// Component Definition
const SectionTitle: React.FC = (props) => (
  <Text
    as="h2"
    fontSize="xl"
  >
    {props.children}
  </Text>
);

export default SectionTitle;