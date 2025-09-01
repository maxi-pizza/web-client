import React, {useEffect, useRef, useState} from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import Cart from 'src/components/Cart/Cart.tsx';
import Counter from 'src/components/Counter/Counter.tsx';
import RadioButton from 'src/components/RadionButton/RadioButton.tsx';
import Input from 'src/components/Input/Input.tsx';
import {Link, useLocation, useNavigate, useNavigation} from 'react-router-dom';
import {
  DefaultError,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {cartQuery, clearCart} from 'src/domains/Cart/cart.query.ts';
import {rootRoute, thankYouRoute} from 'src/routes.ts';
import {checkoutQuery} from 'src/domains/Order/checkout.query.ts';
import {Controller, useForm, useWatch} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {isValidUkrainianNumber} from 'src/domains/Order/utils.ts';
import axios from 'axios';
import LoadingSpinner from 'src/layout/LoadingSpinner/LoadingSpinner.tsx';
import {DeliveryMethodEnum, PaymentMethodEnum} from 'src/types.ts';
import {toast} from 'react-toastify';

type FormValues = {
  //isHouse: boolean;
  // street: string;
  // entrance: string;
  // floor: string;
  // apartment: string;
  // house: string;

  deliveryMethod: number;
  change: string;
  intercomCode: string;
  phone: string;
  address: string;
  peopleCount: number;
  name: string;
  paymentMethod: number;
  comment: string;
  email: string;
};

const Order = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {state} = useNavigation();
  const {data: cartData, isLoading: isCartLoading} = useQuery(cartQuery);
  const {data: checkoutData, isLoading: isCheckoutLoading} =
    useQuery(checkoutQuery);
  const {mutate: clearCartMutation} = useMutation({
    mutationFn: async () => {
      return clearCart();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(cartQuery);
    },
  });
  const theme = useTheme() as WhiteTheme;

  const paymentMethods = checkoutData?.payment_methods ?? [];
  const filteredPaymentMethods = (paymentMethods || []).filter(
    method => method.name !== 'WayForPay',
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const localStorageValues: FormValues = JSON.parse(
    localStorage.getItem('formValues') ?? '{}',
  );
  const initialValues: FormValues =
    localStorageValues !== null && Object.keys(localStorageValues).length > 0
      ? localStorageValues
      : {
          name: '',
          email: '',
          phone: '',
          comment: '',
          // house: '',
          // street: '',
          // floor: '',
          // isHouse: false,
          //   entrance: '',
          //   apartment: '',
          address: '',
          intercomCode: '',

          change: '',
          deliveryMethod: DeliveryMethodEnum.Takeaway,

          paymentMethod: PaymentMethodEnum.Card,
          peopleCount: 0,
        };

  const deliveryMethods = checkoutData?.delivery_methods ?? [];

  useEffect(() => {
    if (state !== 'idle') {
      return;
    }
    if (cartData && Object.keys(cartData).length < 1) {
      navigate(rootRoute);
    }
  }, [cartData, navigate, state]);
  useEffect(() => {
    if (checkoutData) {
      window.scrollTo(0, 0);
    }
  }, [pathname, checkoutData]);

  const validationRequired = 'Заповніть це поле';

  const takeawaySchema = yup.object({
    name: yup.string(),
    email: yup.string(),
    phone: yup
      .string()
      .required(validationRequired)
      .test('is possible number', 'Не вірний формат телефону', value =>
        isValidUkrainianNumber(value),
      ),
    comment: yup.string(),
  });
  const deliverySchema = yup.object({
    name: yup.string(),
    email: yup.string(),
    phone: yup
      .string()
      .required(validationRequired)
      .test('is possible number', 'Не вірний формат телефону', value =>
        isValidUkrainianNumber(value),
      ),
    comment: yup.string(),
    address: yup.string().required(validationRequired),
  });

  const getValidationSchema = (value: FormValues) => {
    if (value.deliveryMethod === DeliveryMethodEnum.Delivery) {
      return deliverySchema;
    }
    return takeawaySchema;
  };
  const [validationSchema, setValidationSchema] = useState<
    typeof takeawaySchema | typeof deliverySchema
  >(getValidationSchema(initialValues));
  const {mutate: placeOrder, isPending: isPlacingOrder} = useMutation<
    unknown,
    DefaultError,
    {
      data: any;
    }
  >({
    mutationFn: async ({data}: {data: any}) => {
      return await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/placeOrder`,
        data,
      );
    },
  });
  const {
    handleSubmit,
    control,
    watch,
    getValues,

    formState: {errors, isSubmitting},
  } = useForm<FormValues>({
    defaultValues: initialValues,
    // @ts-ignore
    resolver: yupResolver(validationSchema),
  });

  const paymentMethod = useWatch({control, name: 'paymentMethod'});
  const deliveryMethod = useWatch({control, name: 'deliveryMethod'});

  const isCardPayment = paymentMethod == PaymentMethodEnum.Card;
  const isDelivery = deliveryMethod == DeliveryMethodEnum.Delivery;

  const onChangeDeliveryMethodScheme = (value: number) => {
    setValidationSchema(
      getValidationSchema({
        ...initialValues,
        deliveryMethod:
          DeliveryMethodEnum.Delivery == value
            ? DeliveryMethodEnum.Delivery
            : DeliveryMethodEnum.Takeaway,
      }),
    );
  };

  useEffect(() => {
    if (containerRef.current && Object.keys(errors).length > 0) {
      containerRef.current.scrollIntoView();
    }
  }, [errors]);

  const onSubmit = async (data: FormValues) => {
    const {
      name,
      email,
      phone,
      address,
      comment,
      deliveryMethod,
      paymentMethod,
      peopleCount,
      change,
    } = data;

    placeOrder(
      {
        data: {
          name: name,
          address,
          email,
          phone,
          delivery_method_id: deliveryMethod,
          payment_method_id: paymentMethod,
          people_count: peopleCount,
          products: Object.keys(cartData).map(id => ({
            product_id: id,
            variant_id: undefined,
            count: cartData[id].count,
          })),
          comment,
          change,
        },
      },
      {
        onSuccess: () => {
          localStorage.removeItem('formValues');
          navigate(thankYouRoute, {state: deliveryMethod});

          setTimeout(() => {
            clearCartMutation();
          }, 500);
        },
        onError: () => {
          toast('Щось пішло не так', {
            type: 'error',
          });
        },
      },
    );
  };

  React.useEffect(() => {
    const subscription = watch(values => {
      localStorage.setItem(
        'formValues',
        JSON.stringify({
          ...values,
        }),
      );
    });
    return () => subscription.unsubscribe();
  }, [watch, getValues]);

  const isLoading =
    isCheckoutLoading || isCartLoading || isSubmitting || isPlacingOrder;

  return (
    <LoadingSpinner isLoading={isLoading}>
      <div ref={containerRef} css={container}>
        <div css={pathContainer}>
          <Link to={rootRoute}>
            <Text type={'bigBody'}>Головна </Text>
          </Link>
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
                        error={errors.phone?.message}
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
                        placeholder={'Email'}
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
                      onChangeType={value => {
                        onChange(value);
                        onChangeDeliveryMethodScheme(value);
                      }}
                      // @ts-ignore
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
                            placeholder={'Адреса*'}
                            onChangeText={onChange}
                            value={value}
                            error={errors.address?.message}
                          />
                        )}
                        name="address"
                      />
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
                        // @ts-ignore
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
            <div css={cartWrapper}>
              <Cart withOrderButton={false} />
            </div>
          </div>
        </div>
      </div>
    </LoadingSpinner>
  );
};

const cartWrapper = theme => css`
  height: 500px;

  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    position: sticky;
    top: 10px;
    height: unset;
    max-height: calc(100vh - 40px);
  }
`;

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

const contactInput = css`
  width: 100%;
  margin-bottom: 8px;
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
  flex-direction: column;
`;

const inputsWrapper = theme => css`
  display: flex;
  flex-direction: column;
  margin-right: 0;

  @media (min-width: ${theme.media.pc}) {
    margin-right: 8px;
  }
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
  margin-top: 32px;
`;

export const Component = Order;
