import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import MinusSvg from 'src/assets/icons/minus.svg';
import PlusSvg from 'src/assets/icons/plus.svg';
import TrashSvg from 'src/assets/icons/trash.svg';
import {WhiteTheme} from 'src/styles/theme.ts';

const Cart = ({withOrderButton = true}: {withOrderButton?: boolean}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div>
      <div css={cart}>
        <div css={cartWrapper}>
          <Text type={'h3'}>Ваше замовлення</Text>
          <div css={cartItemWrapper}>
            <div css={cartItemTextWrapper}>
              <Text type={'h5'}>Піца "Прошутто</Text>
              <Text type={'h5'}>399 грн</Text>
            </div>
            <div css={buttonsWrapper}>
              <div css={counterWrapper}>
                <button css={minusButton}>
                  <MinusSvg color={theme.colors.accent} />
                </button>
                <Text type={'h5'}>2</Text>
                <button css={addButton}>
                  <PlusSvg color={theme.colors.accent} />
                </button>
              </div>
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
          <div css={dottedLine} />
          <div css={cartItemWrapper}>
            <div css={cartItemTextWrapper}>
              <Text type={'h5'}>Піца "Прошутто</Text>
              <Text type={'h5'}>399 грн</Text>
            </div>
            <div css={buttonsWrapper}>
              <div css={counterWrapper}>
                <button css={minusButton}>
                  <MinusSvg color={theme.colors.accent} />
                </button>
                <Text type={'h5'}>2</Text>
                <button css={addButton}>
                  <PlusSvg color={theme.colors.accent} />
                </button>
              </div>
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
        </div>
        <div css={cartFooter}>
          <div css={horizontalLine} />
          <div css={sumWrapper}>
            <Text type={'h4'}>Всього:</Text>
            <Text type={'h4'}>1399 грн</Text>
          </div>
          {withOrderButton && (
            <button css={orderButton}>
              <Text type={'h5'} color={theme.colors.textWhite}>
                Замовити
              </Text>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const cartWrapper = css`
  padding-top: 32px;
  flex-direction: column;
  align-items: center;
`;

const cart = theme => css`
  background-color: ${theme.colors.container};
  width: 396px;
  border: 1px solid ${theme.colors.stroke};
  border-radius: 12px;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cartItemWrapper = css`
  width: 348px;
  margin-top: 32px;
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

const counterWrapper = css`
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-between;
  svg {
    height: 22px;
    width: 22px;
  }
`;

const minusButton = theme => css`
  background-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const addButton = theme => css`
  background-color: transparent;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const dottedLine = theme => css`
  height: 1px;
  width: 348px;
  border-top: 1px dashed ${theme.colors.stroke};
`;

const horizontalLine = theme => css`
  height: 1px;
  width: 348px;
  background-color: ${theme.colors.stroke};
`;

const cartFooter = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-bottom: 24px;
  margin-top: 40px;
`;

const sumWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const orderButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 348px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default Cart;
