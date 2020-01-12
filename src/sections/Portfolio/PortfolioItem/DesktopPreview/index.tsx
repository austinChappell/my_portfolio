// External Dependencies
import React from 'react';

// Internal Dependencies
import Screenshot, { ScreenshotProps } from './Screenshot';
import Computer from './Computer';

// Local Typings
interface Props {
  screenshotProps: ScreenshotProps;
}

// Component Definition
const DesktopPreview: React.FC<Props> = (props) => {
  return (
    <Computer>
      <Screenshot
        {...props.screenshotProps}
      />
    </Computer>
  )
}

export default DesktopPreview;
