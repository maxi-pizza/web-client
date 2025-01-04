import React, {useEffect} from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import Cart from 'src/components/Cart/Cart.tsx';
import Counter from 'src/components/Counter/Counter.tsx';
import RadioButton from 'src/components/RadionButton/RadioButton.tsx';
import SwitchButton from 'src/components/SwitchButton/SwitchButton.tsx';
import Input from 'src/components/Input/Input.tsx';
import {useLocation, useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import {cartQuery} from 'src/domains/Cart/cart.query.ts';
import {homeRoute} from 'src/routes.ts';
import {checkoutQuery} from 'src/domains/Order/checkout.query.ts';
import {Controller, useForm, useWatch} from 'react-hook-form';

enum PaymentMethodEnum {
  Card = 1,
  Cash = 2,
}

enum DeliveryMethodEnum {
  Takeaway = 1,
  Delivery = 2,
}

type FormValues = {
  isHouse: boolean;
  deliveryMethod: DeliveryMethodEnum;
  change: string;
  house: string;
  intercomCode: string;
  phone: string;
  street: string;
  peopleCount: number;
  name: string;
  paymentMethod: PaymentMethodEnum;
  comment: string;
  entrance: string;
  floor: string;
  email: string;
  apartment: string;
};

const Order = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {data: cartData} = useQuery(cartQuery);
  const {data: checkoutData} = useQuery(checkoutQuery);
  const theme = useTheme() as WhiteTheme;
  const paymentMethods = checkoutData?.payment_methods ?? [];
  const filteredPaymentMethods = (paymentMethods || []).filter(
    method => method.name !== 'WayForPay',
  );

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    comment: '',
    house: '',
    entrance: '',
    apartment: '',
    intercomCode: '',
    street: '',
    floor: '',
    change: '',
    deliveryMethod: DeliveryMethodEnum.Takeaway,
    isHouse: true,
    paymentMethod: PaymentMethodEnum.Card,
    peopleCount: 0,
  };

  const deliveryMethods = checkoutData?.delivery_methods ?? [];

  useEffect(() => {
    if (cartData && Object.keys(cartData).length < 1) {
      navigate(homeRoute);
    }
  }, [cartData]);
  useEffect(() => {
    if (checkoutData) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  const {handleSubmit, control} = useForm({
    defaultValues: initialValues,
  });

  const isCardPayment =
    useWatch({control, name: ['paymentMethod']}) == PaymentMethodEnum.Card;
  const isDelivery =
    useWatch({control, name: ['deliveryMethod']}) ==
    DeliveryMethodEnum.Delivery;
  const isHouse = useWatch({control, name: ['isHouse']})[0];

  const onSubmit = data => {
    console.log(data, 'data');
  };
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
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      placeholder={"Ім'я"}
                      inputType={'text'}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
              </div>
              <div css={contactInput}>
                <Controller
                  control={control}
                  render={({field: {value, onChange}}) => (
                    <Input
                      placeholder={'Номер телефону*'}
                      inputType={'text'}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="phone"
                />
              </div>
              <div css={contactInput}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <Input
                      placeholder={'email'}
                      inputType={'text'}
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                  name="email"
                />
              </div>
            </div>
          </div>
          <div css={deliveryMethodAndAddressWrapper}>
            <Text type={'h3'}>Оберіть метод та адресу доставки</Text>
            <div css={radioWrapper}>
              <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                  <RadioButton
                    options={deliveryMethods}
                    onChangeType={onChange}
                    value={value}
                  />
                )}
                name="deliveryMethod"
              />
            </div>
            {isDelivery && (
              <>
                <div css={addressInputWrapper}>
                  <div css={inputsWrapper}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          inputType={'text'}
                          placeholder={'Вулиця*'}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                      name="street"
                    />
                    <div css={addressInformationWrapper}>
                      {isHouse && (
                        <>
                          <div
                            css={[
                              halfInput,
                              css`
                                margin-bottom: 8px;
                                @media (min-width: ${theme.media.laptop}) {
                                  margin-bottom: 0;
                                }
                              `,
                            ]}>
                            <Controller
                              control={control}
                              render={({field: {onChange, value}}) => (
                                <Input
                                  inputType={'text'}
                                  placeholder={'Під’їзд*'}
                                  onChangeText={onChange}
                                  value={value}
                                />
                              )}
                              name="entrance"
                            />
                          </div>
                          <div css={halfInput}>
                            <Controller
                              control={control}
                              render={({field: {onChange, value}}) => (
                                <Input
                                  inputType={'text'}
                                  placeholder={'Квартира*'}
                                  onChangeText={onChange}
                                  value={value}
                                />
                              )}
                              name="apartment"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div css={inputsWrapper}>
                    <Controller
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <Input
                          inputType={'text'}
                          placeholder={'Будинок*'}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                      name="house"
                    />
                    <div css={addressInformationWrapper}>
                      {isHouse && (
                        <>
                          <div
                            css={[
                              halfInput,
                              css`
                                margin-bottom: 8px;
                                @media (min-width: ${theme.media.laptop}) {
                                  margin-bottom: 0;
                                }
                              `,
                            ]}>
                            <Controller
                              control={control}
                              render={({field: {onChange, value}}) => (
                                <Input
                                  inputType={'text'}
                                  placeholder={'Поверх*'}
                                  onChangeText={onChange}
                                  value={value}
                                />
                              )}
                              name="floor"
                            />
                          </div>
                          <div css={halfInput}>
                            <Controller
                              control={control}
                              render={({field: {onChange, value}}) => (
                                <Input
                                  inputType={'text'}
                                  placeholder={'Код домофону'}
                                  onChangeText={onChange}
                                  value={value}
                                />
                              )}
                              name="intercomCode"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div css={toggleContainer}>
                  <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <SwitchButton
                        onChange={value => onChange(value)}
                        checked={value}
                      />
                    )}
                    name="isHouse"
                  />

                  <div
                    css={css`
                      margin-left: 8px;
                    `}>
                    <Text type={'bigBody'}>В мене приватний будинок</Text>
                  </div>
                </div>
              </>
            )}

            <div css={paymentMethodsWrapper}>
              <Text type={'h3'}>Методи оплати</Text>
              <div css={radioWrapper}>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <RadioButton
                      options={filteredPaymentMethods}
                      value={value}
                      onChangeType={onChange}
                    />
                  )}
                  name="paymentMethod"
                />
              </div>
              {!isCardPayment && (
                <div css={contactInput}>
                  <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                      <Input
                        inputType={'number'}
                        placeholder={'Решта з'}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="change"
                  />
                </div>
              )}
            </div>
            <div css={personCountNCommentWrapper}>
              <Text type={'h3'}>Кількість осіб та коментарій</Text>
              <div
                css={css`
                  margin-top: 24px;
                  margin-bottom: 24px;
                `}>
                <Controller
                  control={control}
                  render={({field: {value, onChange}}) => (
                    <Counter
                      onHandleMinus={() =>
                        onChange(Math.max(Number(value) - 1, 0))
                      }
                      count={Number(value)}
                      onHandlePlus={() => onChange(Number(value) + 1)}
                    />
                  )}
                  name="peopleCount"
                />
              </div>
              <div>
                <Controller
                  control={control}
                  render={({field: {onChange, value}}) => (
                    <textarea
                      placeholder={'Коментарій до замовлення'}
                      rows={8}
                      css={textareaStyles}
                      onChange={e => onChange(e.target.value)}
                      value={value}
                    />
                  )}
                  name="comment"
                />
              </div>
            </div>
            <button css={orderButton} onClick={handleSubmit(onSubmit)}>
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
  padding-bottom: 120px;

  @media (min-width: ${theme.media.tablet}) {
    padding-bottom: 100px;
  }
`;

const pathContainer = theme => css`
  display: flex;
  margin-bottom: 32px;
  width: 343px;

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
  flex-direction: column-reverse;
  width: 343px;

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
  display: flex;
  flex-direction: column;
  border: none;
  background-color: transparent;
  width: 343px;
  padding: 0;
  margin-top: 20px;

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
  flex-direction: column;

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
  width: 100%;
  margin-bottom: 8px;

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
  flex-direction: column;

  @media (min-width: ${theme.media.pc}) {
    flex-direction: row;
  }
`;

const addressInformationWrapper = theme => css`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: column;

  @media (min-width: ${theme.media.laptop}) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const mobileMargin = css`
  margin-bottom: 8px;
  width: 100%;
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
  margin-right: 0;

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
