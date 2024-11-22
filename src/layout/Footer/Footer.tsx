import React from 'react';
import {css} from '@emotion/react';
import logo from 'src/assets/logo.png';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';
import Text from 'src/components/Text.tsx';
import {theme} from 'src/styles/theme.ts';

const Footer = () => {
  return (
    <div css={container}>
      <img css={logoStyles} src={String(logo)} alt="logo" />
      <div>
        <Text type={'h5'} color={'#FFFFFF'}>
          Контактна інформація:
        </Text>
        <div css={textNSvgWrapper}>
          <DistanceSvg color={theme.colors.accent} />
          <Text type={'bigBody'} color={'#FFFFFF'}>
            ЖК Артвилль, вул. Спрейса 1, Одеса
          </Text>
        </div>
        <div css={textNSvgWrapper}>
          <PaceSvg color={theme.colors.accent} />
          <Text
            type={'bigBody'}
            css={css`
              color: #ffffff;
            `}>
            10:00-22:00
          </Text>
        </div>
        <div css={textNSvgWrapper}>
          <PhoneSvg color={theme.colors.accent} />
          <Text
            type={'bigBody'}
            css={css`
              color: #ffffff;
            `}>
            066-98-98-095
          </Text>
        </div>
        <div css={textNSvgWrapper}>
          <PhoneSvg color={theme.colors.accent} />
          <Text
            type={'bigBody'}
            css={css`
              color: #ffffff;
            `}>
            098 98 98 095
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
`;

const logoStyles = css`
  margin-left: 132px;
  width: 108px;
  height: 80px;
`;

const textNSvgWrapper = css`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
export default Footer;
