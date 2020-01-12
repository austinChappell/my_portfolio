// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Section from '../../components/Section';
import {
  colors,
  ids,
} from '../../constants';
import WelcomeTitle from './WelcomeTitle';

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
      <WelcomeTitle />
    </StyledSection>
  )
}

export default Welcome;
