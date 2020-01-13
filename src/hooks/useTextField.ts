// External Dependencies
import { useState } from 'react';

// Hook Definition
export function useTextField<T = HTMLInputElement | HTMLTextAreaElement>(initialValue: string = '') {
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState(initialValue);

  function handleBlur(evt: React.FocusEvent<T>) {
    setIsTouched(true);
  }

  function handleChange(evt: React.ChangeEvent<any>) {
    setValue(evt.target.value);
  }

  return {
    inputProps: {
      onBlur: handleBlur,
      onChange: handleChange,
      value,
    },
    isTouched,
  };
}
