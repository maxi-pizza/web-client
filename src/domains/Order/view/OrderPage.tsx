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
              <div css={contactInput}>
                <Input placeholder={'Номер телефону*'} inputType={'text'} />
              </div>
              <div css={contactInput}>
                <Input placeholder={'Номер телефону*'} inputType={'text'} />
              </div>
              <div css={contactInput}>
                <Input placeholder={'Номер телефону*'} inputType={'text'} />
              </div>
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
                <div css={addressInformationWrapper}>
                  <div css={mobileMargin}>
                    <Input
                      width={'49%'}
                      inputType={'text'}
                      placeholder={'Під’їзд*'}
                    />
                  </div>

                  <Input
                    width={'49%'}
                    inputType={'text'}
                    placeholder={'Квартира*'}
                  />
                </div>
                <div css={mobileMargin}>
                  <Dropdown
                    options={districts}
                    placeholder={'Оберіть найближчий район'}
                  />
                </div>
              </div>
              <div css={inputsWrapper}>
                <Input
                  inputType={'text'}
                  width={'100%'}
                  placeholder={'Вулиця*'}
                />
                <div css={addressInformationWrapper}>
                  <div css={mobileMargin}>
                    <Input
                      width={'49%'}
                      inputType={'text'}
                      placeholder={'Під’їзд*'}
                    />
                  </div>
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
              <div css={contactInput}>
                <Input inputType={'number'} placeholder={'Решта з'} />
              </div>
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
        <div>
          <Cart withOrderButton={false} />
        </div>
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
  padding-top: 140px;
  padding-bottom: 100px;
  @media (max-width: ${theme.media.mobile}) {
    padding-bottom: 50px;
  }
`;

const pathContainer = theme => css`
  width: 1376px;
  display: flex;
  margin-bottom: 32px;
  @media (max-width: ${theme.media.mobile}) {
    width: 343px;
  }
`;

const cardWrapper = theme => css`
  width: 1376px;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column-reverse;
    width: 343px;
  }
`;
const orderCard = theme => css`
  width: 956px;
  background-color: ${theme.colors.container};
  border-radius: 12px;
  border: 1px solid ${theme.colors.stroke};
  padding: 32px;
  margin-bottom: 80px;
  @media (max-width: ${theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    border: none;
    background-color: transparent;
    width: 343px;
    padding: 0;
    margin-top: 20px;
  }
`;

const contactInformationWrapper = css`
  margin-top: 32px;
`;

const contactInputWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

const contactInput = theme => css`
  width: 33%;
  @media (max-width: ${theme.media.mobile}) {
    width: 100%;
    margin-bottom: 8px;
  }
`;

const deliveryMethodAndAddressWrapper = css`
  margin-top: 32px;
`;

const radioWrapper = css`
  display: flex;
  margin-top: 26px;
  margin-bottom: 26px;
`;

const addressInputWrapper = theme => css`
  display: flex;
  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

const addressInformationWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
`;

const mobileMargin = theme => css`
  margin-bottom: 0;
  @media (max-width: ${theme.media.mobile}) {
    margin-bottom: 8px;
  }
`;

const inputsWrapper = theme => css`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  @media (max-width: ${theme.media.mobile}) {
    margin-right: 0;
  }
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
