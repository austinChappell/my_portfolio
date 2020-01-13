// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import Icon from '../../../../components/Icon';
import { space } from '../../../../constants';
import { IconName } from '../../../../components/Icon/svg-data';

// Local Typings
interface Link {
  href: string;
  iconName: IconName;
}

// Local Variables
const iconSize = 40;

const List = styled.ul({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: space.xl,
});
const ListItem = styled.li({
  margin: space.sm,
});

const links: Link[] = [
  {
    href: 'https://twitter.com/AWCwebdeveloper',
    iconName: 'twitter',
  },
  {
    href: 'https://github.com/austinChappell',
    iconName: 'github',
  },
]

// Component Definition
const SocialMedia: React.FC = () => {
  return (
    <List>
      {links.map(link => (
        <ListItem key={link.iconName}>
          <a
            href={link.href}
            target="_blank"
          >
            <Icon
              color="white"
              name={link.iconName}
              size={iconSize}
            />
          </a>
        </ListItem>
      ))}
    </List>
  )
}

export default SocialMedia;
