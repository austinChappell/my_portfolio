// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import DesktopPreview from './DesktopPreview';
import Details, { DetailsProps } from './Details';

// Local Typings
interface Props extends DetailsProps {
  imageAltName: string;
  imageFileName: string;
}

// Local Variables
const Wrapper = styled.div({
  display: 'flex',
  margin: 20,
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
