// External Dependencies
import styled from '@emotion/styled';

// Internal Dependencies
import { navHeight } from './Nav';

// Local Typings
interface Props {
  backgroundColor?: string;
  fullHeight?: boolean;
}

// Component Definition
const Section = styled.section<Props>(props => ({
  backgroundColor: props.backgroundColor,
  minHeight: props.fullHeight ? '100vh' : `calc(100vh - ${navHeight}px)`,
  width: '100vw',
}));

export default Section;
