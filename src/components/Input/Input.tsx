import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';

const Input = ({
  inputType,
  placeholder,
}: {
  inputType: 'text' | 'tel' | 'number' | 'email';
  placeholder: string;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      css={css`
        width: 100%;
        height: 48px;
        outline: none;
        border: 1px solid ${theme.colors.stroke};
        border-radius: 8px;
        padding-left: 16px;
        font-family: ${theme.fontFamily};
        font-size: 16px;
        font-weight: ${theme.fontWeights.regular};
        @media (min-width: ${theme.media.laptop}) {
          height: 53px;
        }
      `}
    />
  );
};

export default Input;
