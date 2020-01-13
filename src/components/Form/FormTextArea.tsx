// External Dependencies
import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';

// Internal Dependencies
import Text from '../Text';
import {
  colors,
  space,
} from '../../constants';

// Local Typings
interface Props extends HTMLProps<HTMLTextAreaElement> {
  errorMessage?: string | null;
  name: string;
}
interface TextAreaProps {
  error: boolean;
}

// Local Variables
const Label = styled.label({
  display: 'block',
  maxWidth: 400,
  padding: space.md,
  width: '100%',
});
const TextArea = styled.textarea<TextAreaProps>(props => ({
  border: `1px solid ${props.error ? colors.error : colors.gray80}`,
  borderRadius: space.xs,
  display: 'block',
  fontSize: 16,
  padding: space.sm,
  resize: 'none',
  width: '100%',
}));

// Component Definition
const FormTextArea: React.FC<Props> = ({
  errorMessage,
  ...props
}) => {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <TextArea
        error={!!errorMessage}
        name={props.name}
        rows={5}
        {...props}
      />
      {errorMessage && (
        <Text
          fontColor="error"
          fontSize="sm"
        >
          {errorMessage}
        </Text>
      )}
    </Label>
  )
}

export default FormTextArea;
