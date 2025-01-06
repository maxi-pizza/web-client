import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import Text from 'src/components/Text.tsx';

const Input = ({
  inputType,
  placeholder,
  value,
  onChangeText,
  error,
}: {
  inputType: 'text' | 'tel' | 'number' | 'email';
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}) => {
  const theme = useTheme() as WhiteTheme;

  return (
    <div
      css={css`
        position: relative;
      `}>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={e => onChangeText(e.target.value)}
        css={inputStyles(error)}
      />
      {error && (
        <div css={errorWrapper}>
          <Text type={'caption'} color={theme.colors.accent}>
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};

const errorWrapper = css`
  position: absolute;
  bottom: 0;
  right: 4px;
  z-index: 1;
`;

const inputStyles = error => theme => css`
  width: 100%;
  height: 48px;
  outline: none;
  border: 1px solid ${error ? theme.colors.accent : theme.colors.stroke};
  border-radius: 8px;
  padding-left: 16px;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  font-weight: ${theme.fontWeights.regular};

  @media (min-width: ${theme.media.laptop}) {
    height: 53px;
  }
`;

export default Input;
