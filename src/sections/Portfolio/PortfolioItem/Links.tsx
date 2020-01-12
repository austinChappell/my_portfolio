// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import {
  colors,
  space,
} from '../../../constants';

// Local Typings
export interface LinksProps {
  githubLink: string;
  siteLink: string;
}

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
});
const Link = styled.a({
  border: `1px solid ${colors.black}`,
  color: colors.black,
  margin: space.xs,
  padding: space.xs,
  textDecoration: 'none',

  '&:visited': {
    color: colors.black,
  },
});

// Component Definition
const Links: React.FC<LinksProps> = (props) => {
  return (
    <Wrapper>
      <Link
        href={props.githubLink}
        target="_blank"
      >
        Code
      </Link>

      <Link
        href={props.siteLink}
        target="_blank"
      >
        Site
      </Link>
    </Wrapper>
  )
}

export default Links;
