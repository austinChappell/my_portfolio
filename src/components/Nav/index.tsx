// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import NavItem, { NavItemProps } from './NavItem';
import NavItemList from './NavItemList';
import { colors } from '../../constants';

// Local Typings
interface Props {
  navItems: NavItemProps[]
}

// Local Variables
export const navHeight = 60;

const Wrapper = styled.nav({
  alignItems: 'center',
  backgroundColor: colors.black,
  display: 'flex',
  height: navHeight,
  position: 'sticky',
  top: 0,
});

// Component Definition
const Nav: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <NavItemList>
        {props.navItems.map(navItem => (
          <NavItem
            key={navItem.label}
            label={navItem.label}
          />
        ))}
      </NavItemList>
    </Wrapper>
  )
}

export default Nav;
