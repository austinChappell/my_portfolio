// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { navHeight } from './Nav';

// Component Definition
const Section = styled.section({
  height: '100vh',
  paddingTop: navHeight,
  width: '100vw',

  '&:first-child': {
    height: `calc(100vh - ${navHeight}px)`,
    paddingTop: 0,
  },
});

export default Section;
