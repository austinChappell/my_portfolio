// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import {
  colors,
  space,
} from '../../../../../constants';

// Local Typings
export interface LinksProps {
  githubLink: string;
  siteLink: string;
}

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: space.md,
});
const Link = styled.a({
  backgroundColor: colors.brand,
  borderRadius: space.xs,
  color: colors.white,
  margin: space.xs,
  minWidth: 100,
  padding: space.xs,
  textAlign: 'center',
  textDecoration: 'none',
  transition: '300ms',

  '&:hover': {
    backgroundColor: `${colors.brand}dd`,
  },

  '&:visited': {
    color: colors.white,
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
        View Code
      </Link>

      <Link
        href={props.siteLink}
        target="_blank"
      >
        Visit Site
      </Link>
    </Wrapper>
  )
}

export default Links;
