import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import Cart from 'src/components/Cart/Cart.tsx';
import Counter from 'src/components/Counter/Counter.tsx';
import RadioButton from 'src/components/RadionButton/RadioButton.tsx';
import SwitchButton from 'src/components/SwitchButton/SwitchButton.tsx';
import Input from 'src/components/Input/Input.tsx';
import Dropdown from 'src/components/Dropdown/Dropdown.tsx';

const OrderPage = () => {
  const theme = useTheme() as WhiteTheme;
  const deliveryMethods = [{name: 'Доставка'}, {name: 'Самовивіз'}];
  const paymentMethods = [{name: 'Готівка'}, {name: 'Картка'}];
  const districts = [
    {name: 'Центр'},
    {name: 'Таїрово'},
    {name: 'Сьоме небо'},
    {name: 'Селище Котовського'},
  ];
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
              <Input
                width={'33%'}
                placeholder={'Номер телефону*'}
                inputType={'text'}
              />
              <Input
                width={'33%'}
                placeholder={'Номер телефону*'}
                inputType={'text'}
              />
              <Input
                width={'33%'}
                placeholder={'Номер телефону*'}
                inputType={'text'}
              />
            </div>
          </div>
          <div css={deliveryMethodAndAddressWrapper}>
            <Text type={'h3'}>Оберіть метод та адресу доставки</Text>
            <div css={radioWrapper}>
              <RadioButton options={deliveryMethods} />
            </div>
            <div css={addressInputWrapper}>
              <div css={inputsWrapper}>
                <Input
                  inputType={'text'}
                  width={'100%'}
                  placeholder={'Вулиця*'}
                />
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    margin-bottom: 8px;
                  `}>
                  <Input
                    width={'49%'}
                    inputType={'text'}
                    placeholder={'Під’їзд*'}
                  />
                  <Input
                    width={'49%'}
                    inputType={'text'}
                    placeholder={'Квартира*'}
                  />
                </div>
                <Dropdown
                  options={districts}
                  placeholder={'Оберіть найближчий район'}
                />
              </div>
              <div css={inputsWrapper}>
                <Input
                  inputType={'text'}
                  width={'100%'}
                  placeholder={'Вулиця*'}
                />
                <div
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-top: 8px;
                    margin-bottom: 8px;
                  `}>
                  <Input
                    width={'49%'}
                    inputType={'text'}
                    placeholder={'Під’їзд*'}
                  />
                  <Input
                    width={'49%'}
                    inputType={'text'}
                    placeholder={'Квартира*'}
                  />
                </div>
                <Dropdown
                  options={districts}
                  placeholder={'Оберіть найближчий район'}
                />
              </div>
            </div>
            <div css={toggleContainer}>
              <SwitchButton />
              <div
                css={css`
                  margin-left: 8px;
                `}>
                <Text type={'bigBody'}>В мене приватний будинок</Text>
              </div>
            </div>
            <div css={paymentMethodsWrapper}>
              <Text type={'h3'}>Методи оплати</Text>
              <div css={radioWrapper}>
                <RadioButton options={paymentMethods} />
              </div>
              <input css={inputStyles({width: 33})} placeholder={'Решта з'} />
            </div>
            <div css={personCountNCommentWrapper}>
              <Text type={'h3'}>Кількість осіб та коментарій</Text>
              <div
                css={css`
                  margin-top: 24px;
                  margin-bottom: 24px;
                `}>
                <Counter />
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
  margin-top: 26px;
  margin-bottom: 26px;
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
  display: flex;
  align-items: center;
`;

const paymentMethodsWrapper = css``;

const personCountNCommentWrapper = css`
  margin-top: 32px;
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
