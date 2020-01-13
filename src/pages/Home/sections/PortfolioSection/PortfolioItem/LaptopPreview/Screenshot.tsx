// External Dependencies
import styled from '@emotion/styled';
import React, { useState } from 'react';

// Local Typings
export interface ScreenshotProps {
  alt: string;
  fileName: string;
}

// Local Variables
const Image = styled.img({
  height: '100%',
  width: '100%',
});

// Component Definition
const Screenshot: React.FC<ScreenshotProps> = (props) => {
  const [src] = useState(require(`../../../../../../assets/images/project_screenshots/${props.fileName}.png`));

  return (
    <Image
      alt={props.alt}
      src={src}
    />
  )
}

export default Screenshot;
