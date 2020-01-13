// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Section from '../../../../components/Section';
import {
  colors,
  ids,
} from '../../../../constants';
import WelcomeTitle from './WelcomeTitle';
import watermarkLogo from '../../../../assets/images/watermark_logo.svg';

// Local Variables
const FullAbsolute = styled.div({
  alignItems: 'center',
  backgroundImage: `url(${watermarkLogo})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: 200,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})
const StyledSection = styled(Section)({
  position: 'relative',
});
      
// Component Definition
const WelcomeSection: React.FC = () => {
  return (
    <StyledSection
      backgroundColor={colors.black}
      id={ids.welcome}
    >
      <FullAbsolute>
        <WelcomeTitle />
      </FullAbsolute>
    </StyledSection>
  )
}

export default WelcomeSection;
