// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { colors, space } from '../../constants';

// Internal Dependencies
import { scrollToElement } from './helpers';

// Local Typings
export interface NavItemProps {
  label: string;
  scrollToSelector: string;
}

// Local Variables
const ListItem = styled.li({
  border: `1px solid ${colors.white}`,
  color: colors.white,
  marginRight: space.md,
  padding: `${space.xs}px ${space.sm}px`,

  '&:last-child': {
    marginRight: 0,
  },
});

// Component Definition
const NavItem: React.FC<NavItemProps> = (props) => {
  function handleClick() {
    scrollToElement(props.scrollToSelector);
  }

  return (
    <ListItem onClick={handleClick}>
      {props.label}
    </ListItem>
  )
}

export default NavItem;
