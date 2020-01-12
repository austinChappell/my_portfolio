// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import DesktopPreview from './DesktopPreview';
import Details, { DetailsProps } from './Details';
import {
  colors,
  space,
} from '../../../constants';

// Local Typings
interface Props extends DetailsProps {
  imageAltName: string;
  imageFileName: string;
}

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  margin: 20,

  '&:not(:last-child)': {
    borderBottom: `1px solid ${colors.gray10}`,
    paddingBottom: space.xl,
  },
});

// Component Definition
const PortfolioItem: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <DesktopPreview
        screenshotProps={{
          alt: props.imageAltName,
          fileName: props.imageFileName,
        }}
      />

      <Details
        description={props.description}
        technologies={props.technologies}
        title={props.title}
      />
    </Wrapper>
  )
}

export default PortfolioItem;
