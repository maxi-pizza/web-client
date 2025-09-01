import React from 'react';
import MinusSvg from 'src/assets/icons/minus.svg?react';
import Text from 'src/components/Text.tsx';
import PlusSvg from 'src/assets/icons/plus.svg?react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/theme.ts';

const Counter = ({
  count,
  onHandlePlus,
  onHandleMinus,
}: {
  count?: number;
  onHandlePlus?: () => void;
  onHandleMinus?: () => void;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={counterWrapper}>
      <button css={counterButton} onClick={onHandleMinus}>
        <MinusSvg color={theme.colors.accent} />
      </button>
      <Text type={'h5'}>{String(count) || '0'}</Text>
      <button css={counterButton} onClick={onHandlePlus}>
        <PlusSvg color={theme.colors.accent} />
      </button>
    </div>
  );
};

const counterWrapper = css`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const counterButton = theme => css`
  background-color: ${theme.colors.container};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export default Counter;
