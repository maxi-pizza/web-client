import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import MinusSvg from 'src/assets/icons/minus.svg';
import PlusSVg from 'src/assets/icons/plus.svg';
import PlusSvg from 'src/assets/icons/plus.svg';
import TrashSvg from 'src/assets/icons/trash.svg';
import Cart from 'src/components/Cart/Cart.tsx';

const OrderPage = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div css={pathContainer}>
        <Text type={'bigBody'}>Головна </Text>
        <div
          css={css`
            margin-left: 8px;
          `}>
          <Text type={'bigBody'} color={theme.colors.accent}>
            / Оформлення замовлення
          </Text>
        </div>
      </div>
      <div css={cardWrapper}>
        <div css={orderCard}>
          <Text type={'h1'}>Оформлення замовлення</Text>
          <div css={contactInformationWrapper}>
            <Text type={'h3'}>Контактні дані</Text>
            <div css={contactInputWrapper}>
              <input
                css={inputStyles({width: 33})}
                placeholder={'Номер телефону*'}
              />
              <input
                css={inputStyles({width: 33})}
                placeholder={'Номер телефону*'}
              />
              <input
                css={inputStyles({width: 33})}
                placeholder={'Номер телефону*'}
              />
            </div>
          </div>
          <div css={deliveryMethodAndAddressWrapper}>
            <Text type={'h3'}>Оберіть метод та адресу доставки</Text>
            <div css={radioWrapper}>
              <label css={radioLabel}>
                <input type="radio" name="radio" checked />
                <Text type={'bigBody'}>Доставка</Text>
              </label>
              <label css={radioLabel}>
                <input type="radio" name="radio" />
                <Text type={'bigBody'}>Самовивіз</Text>
              </label>
            </div>
            <div css={addressInputWrapper}>
              <div css={inputsWrapper}>
                <input
                  css={inputStyles({width: 100})}
                  placeholder={'Вулиця*'}
                />
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    margin-bottom: 8px;
                  `}>
                  <input
                    css={inputStyles({width: 49})}
                    placeholder={'Під’їзд*'}
                  />
                  <input
                    css={inputStyles({width: 49})}
                    placeholder={'Квартира*'}
                  />
                </div>
                <input
                  css={inputStyles({width: 100})}
                  placeholder={'Оберіть найближчий район'}
                />
              </div>
              <div css={inputsWrapper}>
                <input
                  css={inputStyles({width: 100})}
                  placeholder={'Вулиця*'}
                />
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    margin-bottom: 8px;
                  `}>
                  <input
                    css={inputStyles({width: 49})}
                    placeholder={'Під’їзд*'}
                  />
                  <input
                    css={inputStyles({width: 49})}
                    placeholder={'Квартира*'}
                  />
                </div>
                <input
                  css={inputStyles({width: 100})}
                  placeholder={'Оберіть найближчий район'}
                />
              </div>
            </div>
            <div css={toggleContainer}>
              <Text type={'bigBody'}>В мене приватний будинок</Text>
            </div>
            <div css={paymentMethodsWrapper}>
              <Text type={'h3'}>Методи оплати</Text>
              <div css={radioWrapper}>
                <label css={radioLabel}>
                  <input type="radio" name="payment" checked />
                  <Text type={'bigBody'}>Готівка</Text>
                </label>
                <label css={radioLabel}>
                  <input type="radio" name="payment" />
                  <Text type={'bigBody'}>Картка</Text>
                </label>
              </div>
              <input css={inputStyles({width: 33})} placeholder={'Решта з'} />
            </div>
            <div css={personCountNCommentWrapper}>
              <Text type={'h3'}>Кількість осіб та коментарій</Text>
              <div css={counterWrapper1}>
                <button css={counterButton}>
                  <MinusSvg color={theme.colors.accent} />
                </button>
                <Text type={'h5'}>2</Text>
                <button css={counterButton}>
                  <PlusSVg color={theme.colors.accent} />
                </button>
              </div>
              <div>
                <textarea
                  placeholder={'Коментарій до замовлення'}
                  rows={8}
                  css={textareaStyles}
                />
              </div>
            </div>
            <button css={orderButton}>
              <Text type={'h5'} color={theme.colors.textWhite}>
                Оформити замовлення
              </Text>
            </button>
          </div>
        </div>
        <Cart withOrderButton={false} />
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  margin-top: -92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const pathContainer = css`
  width: 1376px;
  display: flex;
  padding-top: 140px;
  margin-bottom: 32px;
`;

const cardWrapper = css`
  display: flex;
`;
const orderCard = theme => css`
  width: 956px;
  background-color: ${theme.colors.container};
  border-radius: 12px;
  border: 1px solid ${theme.colors.stroke};
  padding: 32px;
  margin-bottom: 80px;
`;

const contactInformationWrapper = css`
  margin-top: 32px;
`;

const inputStyles =
  ({width}: {width: number}) =>
  theme => css`
    width: ${width}%;
    height: 53px;
    outline: none;
    border: 1px solid ${theme.colors.stroke};
    border-radius: 8px;
    padding-left: 16px;
    font-family: ${theme.fontFamily};
    font-size: 16px;
    font-weight: ${theme.fontWeights.regular};
  `;

const contactInputWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const deliveryMethodAndAddressWrapper = css`
  margin-top: 32px;
`;

const radioWrapper = css`
  display: flex;
`;

const radioLabel = theme => css`
  display: flex;
  cursor: pointer;
  margin-right: 24px;
  user-select: none;
  margin-top: 25px;
  margin-bottom: 25px;

  > input {
    border-color: ${theme.colors.stroke};
    width: 24px;
    height: 24px;
    accent-color: ${theme.colors.accent};
    margin-right: 8px;
  }
`;

const addressInputWrapper = css`
  display: flex;
`;

const inputsWrapper = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 8px;
`;

const toggleContainer = css`
  margin-top: 26px;
  margin-bottom: 34px;
`;

const paymentMethodsWrapper = css``;

const personCountNCommentWrapper = css`
  margin-top: 32px;
`;

const counterWrapper1 = css`
  width: 164px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const counterButton = theme => css`
  background-color: ${theme.colors.container};
  width: 53px;
  height: 53px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const textareaStyles = theme => css`
  width: 100%;
  resize: none;
  outline: none;
  border: 1px solid ${theme.colors.stroke};
  border-radius: 8px;
  font-family: ${theme.fontFamily};
  font-size: 16px;
  font-weight: ${theme.fontWeights.regular};
  padding: 16px;
`;

const orderButton = theme => css`
  width: 281px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.accent};
  border: none;
  border-radius: 8px;
  opacity: 50%;
  margin-top: 32px;
`;

export default OrderPage;
