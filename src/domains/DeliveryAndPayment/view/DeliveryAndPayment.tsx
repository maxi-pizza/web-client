import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import MotorcycleSvg from 'src/assets/icons/motorcycle.svg?react';
import WalletSvg from 'src/assets/icons/wallet.svg?react';
import AcuteSvg from 'src/assets/icons/acute.svg?react';
import CashSvg from 'src/assets/icons/cash.svg?react';
import CardSvg from 'src/assets/icons/credit-card.svg?react';
import MokMapImg from 'src/assets/mokmap.png';
import {rootRoute} from 'src/routes.ts';
import {Link} from 'react-router-dom';

const DeliveryAndPayment = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div css={wrapper}>
        <div
          css={css`
            display: flex;
            width: 343px;
            margin-bottom: 25px;
            @media (min-width: ${theme.media.pc}) {
              width: 1656px;
              margin-bottom: 32px;
            }
            @media (min-width: ${theme.media.laptop}) {
              width: 816px;
            }
            @media (min-width: ${theme.media.pc}) {
              width: 1656px;
            }
          `}>
          <Link to={rootRoute}>
            <Text type={'bigBody'}>Головна</Text>
          </Link>
          <div
            css={css`
              margin-left: 8px;
            `}>
            <Text type={'bigBody'} color={theme.colors.accent}>
              / Доставка і оплата
            </Text>
          </div>
        </div>
        <div css={cardsWrapper}>
          <div css={card}>
            <Text type={'h1'}>Доставка і оплата</Text>
            <div css={deliveryWrapper}>
              <div css={deliveryTextWrapper}>
                <MotorcycleSvg color={theme.colors.accent} />
                <Text type={'bigBody'} opacity={'60%'}>
                  Доставка у межах міста Одеса.
                </Text>
              </div>
              <div css={deliveryTextWrapper}>
                <WalletSvg color={theme.colors.accent} />
                <Text type={'bigBody'} opacity={'60%'}>
                  Доставка безкоштовна
                </Text>
              </div>
              <div css={deliveryTextWrapper}>
                <AcuteSvg color={theme.colors.accent} />
                <div css={mobileTextWrapper}>
                  <Text type={'bigBody'} opacity={'60%'}>
                    7 небо (30 хвилин)
                  </Text>
                  <div css={verticalBar} />
                  <Text type={'bigBody'} opacity={'60%'}>
                    Лен. поселок (1 година)
                  </Text>

                  <div css={verticalBar} />
                  <Text type={'bigBody'} opacity={'60%'}>
                    Авангард (1 година)
                  </Text>
                </div>
              </div>
            </div>
            <div>
              <div
                css={css`
                  margin-top: 30px;
                  @media (min-width: ${theme.media.laptop}) {
                    margin-top: 0;
                  }
                `}>
                <Text type={'h3'}>Способи оплати</Text>
              </div>
              <div css={paymentsWrapper}>
                <div css={paymentWrapper}>
                  <CashSvg color={theme.colors.accent} />
                  <div
                    css={css`
                      margin-bottom: 8px;
                    `}>
                    <Text type={'h5'}>Готівка</Text>
                  </div>
                  <Text type={'bigBody'} opacity={'60%'}>
                    Оплатіть замовлення готівкою безпосередньо при отриманні від
                    кур'єра.
                  </Text>
                </div>
                <div css={paymentWrapper}>
                  <CardSvg color={theme.colors.accent} />
                  <div
                    css={css`
                      margin-bottom: 8px;
                    `}>
                    <Text type={'h5'}>Картка</Text>
                  </div>
                  <Text type={'bigBody'} opacity={'60%'}>
                    Оплата карткою здійснюється через термінал кур'єра під час
                    доставки.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div css={card}>
            <Text type={'h3'}>Зона доставки</Text>
            <img
              src={String(MokMapImg)}
              alt={'map'}
              css={css`
                margin-top: 16px;
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
`;

const wrapper = theme => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 134px;
  padding-top: 105px;
  @media (min-width: ${theme.media.laptop}) {
    padding-top: 148px;
  }
`;

const card = theme => css`
  width: 343px;
  padding: 0;
  border: none;
  background-color: ${theme.colors.background};

  @media (min-width: ${theme.media.laptop}) {
    width: 816px;
    padding: 32px;
    background-color: ${theme.colors.container};
    border-radius: 12px;
    border: 1px solid ${theme.colors.stroke};
    margin-bottom: 30px;
  }
`;

const deliveryTextWrapper = theme => css`
  display: flex;
  margin-bottom: 16px;
  align-items: flex-start;
  svg {
    margin-right: 8px;
    height: 22px;
    width: 22px;
  }
  @media (min-width: ${theme.media.laptop}) {
    align-items: center;
  }
`;

const deliveryWrapper = css`
  margin-top: 24px;
  margin-bottom: 16px;
`;

const verticalBar = theme => css`
  display: none;
  @media (min-width: ${theme.media.laptop}) {
    width: 1px;
    height: 22px;
    background-color: ${theme.colors.stroke};
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const paymentWrapper = theme => css`
  margin-top: 20px;
  svg {
    margin-bottom: 16px;
  }

  @media (min-width: ${theme.media.laptop}) {
    margin-top: 24px;
    svg {
      margin-bottom: 16px;
    }
  }
  @media (min-width: ${theme.media.pc}) {
    margin-right: 24px;
  }
`;

const paymentsWrapper = theme => css`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    flex-direction: unset;
    margin-bottom: 0;
  }
`;

const cardsWrapper = theme => css`
  display: flex;
  width: 343px;
  flex-direction: column;
  @media (min-width: ${theme.media.laptop}) {
    width: 816px;
    justify-content: space-between;
  }
  @media (min-width: ${theme.media.pc}) {
    flex-direction: unset;
    width: 1656px;
  }
`;

const mobileTextWrapper = theme => css`
  display: flex;
  flex-direction: column;
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: unset;
  }
`;

export default DeliveryAndPayment;
