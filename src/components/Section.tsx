// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { navHeight } from './Nav';

// Local Typings
interface Props {
  backgroundColor?: string;
}

// Component Definition
const Section = styled.section<Props>(props => ({
  backgroundColor: props.backgroundColor,
  height: '100vh',
  paddingTop: navHeight,
  width: '100vw',

  '&:first-of-type': {
    height: `calc(100vh - ${navHeight}px)`,
    paddingTop: 0,
  },
}));

export default Section;
