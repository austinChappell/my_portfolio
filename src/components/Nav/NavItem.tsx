// External Dependencies
import styled from '@emotion/styled';
import React from 'react';
import { colors, space } from '../../constants';

// Internal Dependencies
import { scrollToElement } from './helpers';
import { KeyCodes } from '../../types/keyCodes';

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

  function handleKeyDown({ keyCode }: React.KeyboardEvent) {
    if (keyCode === KeyCodes.Enter || keyCode === KeyCodes.Space)
    scrollToElement(props.scrollToSelector);
  }

  return (
    <ListItem
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {props.label}
    </ListItem>
  )
}

export default NavItem;
