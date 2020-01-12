// External Dependencies
import styled from '@emotion/styled';
import React, { useRef } from 'react';
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
  cursor: 'pointer',
  marginRight: space.md,
  outlineColor: colors.white,
  padding: `${space.xs}px ${space.sm}px`,
  transition: '300ms',

  '&:hover': {
    backgroundColor: colors.white,
    color: colors.black,
  },

  '&:last-child': {
    marginRight: 0,
  },
});

// Component Definition
const NavItem: React.FC<NavItemProps> = (props) => {
  const ref = useRef<HTMLLIElement>(null);

  function handleBlur() {
    ref.current?.blur();
  }

  function handleScroll() {
    scrollToElement(props.scrollToSelector);
    handleBlur();
  }

  function handleClick() {
    handleScroll();
  }

  function handleKeyDown({ keyCode }: React.KeyboardEvent) {
    if (keyCode === KeyCodes.Enter || keyCode === KeyCodes.Space) {
      handleScroll();
    }
  }

  return (
    <ListItem
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      ref={ref}
      role="button"
      tabIndex={0}
    >
      {props.label}
    </ListItem>
  )
}

export default NavItem;
