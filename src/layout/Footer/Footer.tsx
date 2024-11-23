import React from 'react';
import {css, useTheme} from '@emotion/react';
import logo from 'src/assets/logo.png';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';
import Text from 'src/components/Text.tsx';
import {theme, WhiteTheme} from 'src/styles/theme.ts';
import InstagramSvg from 'src/assets/icons/instagram.svg';
import FacebookSvg from 'src/assets/icons/facebook.svg';
import TelegramSvg from 'src/assets/icons/telegram.svg';

const Footer = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div
        css={css`
          display: flex;
        `}>
        <img css={logoStyles} src={String(logo)} alt="logo" />
        <div css={contactInformationWrapper}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            Контактна інформація:
          </Text>
          <div css={marginWrapper}>
            <DistanceSvg css={svgStyles} color={theme.colors.accent} />
            <Text type={'bigBody'} color={'#FFFFFF'}>
              ЖК Артвилль, вул. Спрейса 1, Одеса
            </Text>
          </div>
          <div css={marginWrapper}>
            <PaceSvg css={svgStyles} color={theme.colors.accent} />
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              10:00-22:00
            </Text>
          </div>
          <div css={marginWrapper}>
            <PhoneSvg css={svgStyles} color={theme.colors.accent} />
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              066-98-98-095
            </Text>
          </div>
          <div css={marginWrapper}>
            <PhoneSvg css={svgStyles} color={theme.colors.accent} />
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              098 98 98 095
            </Text>
          </div>
        </div>
        <div css={legalInformationWrapper}>
          <div>
            <Text type={'h5'} color={theme.colors.textWhite}>
              Юридична інформація
            </Text>
          </div>
          <div css={marginWrapper}>
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              Доставка і оплата
            </Text>
          </div>
          <div css={marginWrapper}>
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              Політика конфіденційності
            </Text>
          </div>
          <div css={marginWrapper}>
            <Text type={'bigBody'} color={theme.colors.textWhite}>
              Угода користувача
            </Text>
          </div>
        </div>
        <div css={socialInformationWrapper}>
          <Text type={'h5'} color={theme.colors.textWhite}>
            Ми в соціальних мережах:
          </Text>
          <div css={socialWrapper}>
            <button css={socialButton}>
              <InstagramSvg color={theme.colors.accent} />
            </button>
            <button css={socialButton}>
              <TelegramSvg color={theme.colors.accent} />
            </button>
            <button css={socialButton}>
              <FacebookSvg color={theme.colors.accent} />
            </button>
          </div>
        </div>
      </div>
      <div css={rightsWrapper}>
        <div css={horizontalBar} />
        <div css={textWrapper}>
          <Text type={'caption'} color={theme.colors.textWhite}>
            © 2024 Maxi Pizza Sushi.
          </Text>
          <Text type={'caption'} color={theme.colors.textWhite}>
            All Rights Reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

const container = css`
  height: 318px;
  background-color: #242425;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  display: flex;
  padding-top: 32px;
  position: relative;
  z-index: 3;
  bottom: 0;
  flex-direction: column;
  align-items: center;
`;

const logoStyles = css`
  width: 108px;
  height: 80px;
`;

const marginWrapper = css`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const svgStyles = css`
  margin-right: 8px;
`;

const contactInformationWrapper = css`
  margin-left: 312px;
`;

const legalInformationWrapper = css`
  margin-left: 180px;
`;

const socialInformationWrapper = css`
  margin-left: 180px;
  display: flex;
  flex-direction: column;
`;

const socialWrapper = css`
  display: flex;
  margin-top: 16px;
`;

const socialButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.strokeDark};
  margin-right: 8px;
  :hover {
    border: 1px solid ${theme.colors.accent};
  }
`;

const rightsWrapper = css`
  margin-top: 32px;
`;

const horizontalBar = theme => css`
  width: 1656px;
  height: 1px;
  background-color: ${theme.colors.strokeDark};
`;

const textWrapper = css`
  opacity: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export default Footer;
