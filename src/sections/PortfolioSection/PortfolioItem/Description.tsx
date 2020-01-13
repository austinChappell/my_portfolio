// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Text from '../../../components/Text';

// Local Variables
const Wrapper = styled.div({
  flexGrow: 1,
});

// Component Definition
const Description: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Text as="p">
        {children}
      </Text>
    </Wrapper>
  )
}

export default Description;
