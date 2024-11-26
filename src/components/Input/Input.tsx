import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';

const Input = ({
  inputType,
  width,
  placeholder,
}: {
  inputType: 'text' | 'tel' | 'number' | 'email';
  width: string;
  placeholder: string;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      css={css`
        width: ${width};
        height: 53px;
        outline: none;
        border: 1px solid ${theme.colors.stroke};
        border-radius: 8px;
        padding-left: 16px;
        font-family: ${theme.fontFamily};
        font-size: 16px;
        font-weight: ${theme.fontWeights.regular};
      `}
    />
  );
};

export default Input;
