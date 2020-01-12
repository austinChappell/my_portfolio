// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import NavItem, { NavItemProps } from './NavItem';
import Container from '../Container';
import NavItemList from './NavItemList';
import {
  colors,
  space,
} from '../../constants';

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
  padding: `0 ${space.xl}px`,
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

// Component Definition
const Nav: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Container>
        <NavItemList>
          {props.navItems.map(navItem => (
            <NavItem
              key={navItem.label}
              {...navItem}
            />
          ))}
        </NavItemList>
      </Container>
    </Wrapper>
  )
}

export default Nav;
