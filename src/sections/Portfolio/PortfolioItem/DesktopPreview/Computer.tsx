// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { colors, space } from '../../../../constants';

// Local Variables
const borderRadius = 8;
const computerTrimColor = colors.gray20;
const ScreenWrapper = styled.div({
  backgroundColor: colors.black,
  border: `8px solid ${colors.black}`,
  borderRadius,
});
const ComputerBottom = styled.div({
  // alignItems: 'center',
  backgroundColor: computerTrimColor,
  border: `1px solid ${colors.gray50}`,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  display: 'flex',
  justifyContent: 'center',
  height: 6,
  marginTop: -2,
});
const ComputerBottomCircle = styled.div({
  backgroundColor: colors.gray90,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  height: 3,
  width: 50,
})
const ComputerWrapper = styled.div({
  backgroundColor: computerTrimColor,
  border: `2px solid ${computerTrimColor}`,
  borderRadius,
});
const ComputerTrim = styled.div({
  backgroundColor: colors.gray50,
  border: `1px solid ${colors.gray50}`,
  borderRadius,
  margin: '0 auto',
  width: '90%',
});
const Container = styled.div({
  margin: `${space.md}px auto`,
  width: 300,
})

// Component Definition
const Computer: React.FC = (props) => {
  return (
    <Container>
      <ComputerTrim>
        <ComputerWrapper>
          <ScreenWrapper>
            {props.children}
          </ScreenWrapper>
        </ComputerWrapper>
      </ComputerTrim>

      <ComputerBottom>
        <ComputerBottomCircle />
      </ComputerBottom>
    </Container>
  )
}

export default Computer;
