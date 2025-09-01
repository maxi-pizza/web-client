import React from 'react';
import SearchSvg from 'src/assets/icons/search.svg?react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';

const Search = ({onSearch, value}: {onSearch: (e) => void; value: string}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <SearchSvg css={svgWrapper} color={theme.colors.accent} />
      <input
        css={inputStyles}
        inputMode={'text'}
        placeholder={'Пошук'}
        onChange={e => onSearch(e.target.value)}
        value={value}
      />
    </div>
  );
};

const container = css`
  width: 100%;
  height: 53px;
  position: relative;
`;

const svgWrapper = css`
  position: absolute;
  margin-left: 16px;
  top: 14px;
`;

const inputStyles = theme => css`
  padding-left: 48px;
  width: 100%;
  background-color: white;
  height: 100%;
  font-family: ${theme.fontFamily};
  color: ${theme.colors.textPrimary};
  font-size: 16px;
  font-weight: ${theme.fontWeights.regular};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 8px;

  outline: none;
`;

export default Search;
