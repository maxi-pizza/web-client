import React from 'react';
import Text from 'src/components/Text.tsx';
import Counter from 'src/components/Counter/Counter.tsx';
import TrashSvg from 'src/assets/icons/trash.svg';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';

const ProductInCart = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={cartItemWrapper}>
      <div css={cartItemTextWrapper}>
        <Text type={'h5'}>Піца "Прошутто</Text>
        <Text type={'h5'}>399 грн</Text>
      </div>
      <div css={buttonsWrapper}>
        <Counter />
        <div css={deleteButtonWrapper}>
          <button css={deleteButton} />
          <TrashSvg
            css={css`
              position: absolute;
            `}
            color={theme.colors.accent}
          />
        </div>
      </div>
    </div>
  );
};

const cartItemWrapper = theme => css`
  margin-top: 32px;
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
`;

const cartItemTextWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const buttonsWrapper = css`
  margin-top: 14px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const deleteButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 20%;
`;
const deleteButtonWrapper = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProductInCart;
