// External Dependencies
import styled from '@emotion/styled';
import React, { HTMLProps } from 'react';

// Internal Dependencies
import Text from '../Text';
import { space, colors } from '../../constants';

// Local Typings
interface Props extends HTMLProps<HTMLInputElement> {
  errorMessage?: string | null;
  name: string;
}
interface InputProps {
  error: boolean;
}

// Local Variables
const Label = styled.label({
  display: 'block',
  maxWidth: 400,
  padding: space.md,
  width: '100%',
});
const Input = styled.input<InputProps>(props => ({
  border: `1px solid ${props.error ? colors.error : colors.gray80}`,
  borderRadius: space.xs,
  display: 'block',
  fontSize: 16,
  padding: space.sm,
  width: '100%',
}));

// Component Definition
const FormInput: React.FC<Props> = ({
  errorMessage,
  type = 'text',
  ...props
}) => {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <Input
        error={!!errorMessage}
        name={props.name}
        type={type}
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

export default FormInput;
