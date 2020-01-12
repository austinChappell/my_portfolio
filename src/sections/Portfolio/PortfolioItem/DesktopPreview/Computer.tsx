// External Dependencies
import styled from '@emotion/styled';
import React from 'react';

// Internal Dependencies
import { colors } from '../../../../constants';

// Local Variables
const borderRadius = 4;
const computerTrimColor = colors.gray20;
const ScreenWrapper = styled.div({
  backgroundColor: colors.black,
  border: `8px solid ${colors.black}`,
  borderRadius,
});
const ComputerBottom = styled.div({
  alignItems: 'center',
  backgroundColor: computerTrimColor,
  borderBottomLeftRadius: borderRadius,
  borderBottomRightRadius: borderRadius,
  display: 'flex',
  justifyContent: 'center',
  height: 20,
});
const ComputerBottomCircle = styled.div({
  backgroundColor: colors.black,
  borderRadius: 10,
  height: 10,
  width: 10,
})
const ComputerWrapper = styled.div({
  backgroundColor: computerTrimColor,
  border: `2px solid ${computerTrimColor}`,
  borderTopLeftRadius: borderRadius,
  borderTopRightRadius: borderRadius,
});
const ComputerTrim = styled.div({
  backgroundColor: colors.gray50,
  border: `1px solid ${colors.gray50}`,
  borderRadius,
});
const Container = styled.div({
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

        <ComputerBottom>
          <ComputerBottomCircle />
        </ComputerBottom>
      </ComputerTrim>
    </Container>
  )
}

export default Computer;
