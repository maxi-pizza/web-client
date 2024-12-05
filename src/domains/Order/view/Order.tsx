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

const Order = () => {
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
                <Input inputType={'text'} placeholder={'Вулиця*'} />
                <div css={addressInformationWrapper}>
                  <div css={halfInput}>
                    <Input inputType={'text'} placeholder={'Під’їзд*'} />
                  </div>
                  <div css={halfInput}>
                    <Input inputType={'text'} placeholder={'Квартира*'} />
                  </div>
                </div>
                <div css={mobileMargin}>
                  <Dropdown
                    options={districts}
                    placeholder={'Оберіть найближчий район'}
                  />
                </div>
              </div>
              <div css={inputsWrapper}>
                <Input inputType={'text'} placeholder={'Вулиця*'} />
                <div css={addressInformationWrapper}>
                  <div css={halfInput}>
                    <Input inputType={'text'} placeholder={'Під’їзд*'} />
                  </div>
                  <div css={halfInput}>
                    <Input inputType={'text'} placeholder={'Квартира*'} />
                  </div>
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
  @media (min-width: ${theme.media.mobile}) {
    padding-bottom: 120px;
  }
  @media (min-width: ${theme.media.tablet}) {
    padding-bottom: 100px;
  }
`;

const pathContainer = theme => css`
  display: flex;
  margin-bottom: 32px;
  @media (min-width: ${theme.media.mobile}) {
    width: 343px;
  }
  @media (min-width: ${theme.media.tablet}) {
    width: 740px;
  }
  @media (min-width: ${theme.media.laptop}) {
    width: 1160px;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 1376px;
  }
`;

const cardWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  @media (min-width: ${theme.media.mobile}) {
    flex-direction: column-reverse;
    width: 343px;
  }
  @media (min-width: ${theme.media.tablet}) {
    width: 740px;
    align-items: center;
  }
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    width: 1160px;
    align-items: normal;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 1376px;
  }
`;
const orderCard = theme => css`
  @media (min-width: ${theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    border: none;
    background-color: transparent;
    width: 343px;
    padding: 0;
    margin-top: 20px;
  }
  @media (min-width: ${theme.media.tablet}) {
    border-radius: 12px;
    border: 1px solid ${theme.colors.stroke};
    background-color: ${theme.colors.container};
    padding: 32px;
    margin-bottom: 80px;
    width: 740px;
  }
  @media (min-width: ${theme.media.laptop}) {
    margin-top: 0;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 956px;
  }
`;

const contactInformationWrapper = css`
  margin-top: 32px;
`;

const contactInputWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media (min-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
  @media (min-width: ${theme.media.tablet}) {
    width: 100%;
  }
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: ${theme.media.pc}) {
    flex-wrap: nowrap;
  }
`;

const contactInput = theme => css`
  @media (min-width: ${theme.media.mobile}) {
    width: 100%;
    margin-bottom: 8px;
  }
  @media (min-width: ${theme.media.tablet}) {
    width: 100%;
  }
  @media (min-width: ${theme.media.laptop}) {
    width: 49%;
  }
  @media (min-width: ${theme.media.pc}) {
    margin-right: 8px;
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
  @media (min-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
  @media (min-width: ${theme.media.pc}) {
    flex-direction: row;
  }
`;

const addressInformationWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: ${theme.media.mobile}) {
    flex-direction: column;
  }
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const mobileMargin = theme => css`
  margin-bottom: 0;
  width: 100%;
  @media (min-width: ${theme.media.mobile}) {
    margin-bottom: 8px;
  }
`;

const halfInput = theme => css`
  @media (min-width: ${theme.media.laptop}) {
    width: 49%;
    margin-bottom: 8px;
  }
`;

const inputsWrapper = theme => css`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  @media (min-width: ${theme.media.mobile}) {
    margin-right: 0;
  }
  @media (min-width: ${theme.media.pc}) {
    margin-right: 8px;
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

export default Order;
