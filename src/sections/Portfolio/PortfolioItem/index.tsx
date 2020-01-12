// External Dependencies
import React from 'react';
import DesktopPreview from './DesktopPreview';

// Local Typings
interface Props {
  imageAltName: string;
  imageFileName: string;
}

// Component Definition
const PortfolioItem: React.FC<Props> = (props) => {
  return (
    <div style={{ margin: 20 }}>
      <DesktopPreview
        screenshotProps={{
          alt: props.imageAltName,
          fileName: props.imageFileName,
        }}
      />
    </div>
  )
}

export default PortfolioItem;
