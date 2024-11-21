import React from 'react';
import {css} from '@emotion/react';
import logo from 'src/assets/logo.png';
import {bigBody, h5} from '../../style.ts';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';

const Footer = () => {
  return (
    <div css={container}>
      <img css={logoStyles} src={logo} alt="logo" />
      <div>
        <p
          css={css`
            ${h5};
            color: #ffffff;
          `}>
          Контактна інформація:
        </p>
        <div css={textNSvgWrapper}>
          <DistanceSvg />
          <p
            css={css`
              ${bigBody};
              color: #ffffff;
            `}>
            ЖК Артвилль, вул. Спрейса 1, Одеса
          </p>
        </div>
        <div css={textNSvgWrapper}>
          <PaceSvg />
          <p
            css={css`
              ${bigBody};
              color: #ffffff;
            `}>
            10:00-22:00
          </p>
        </div>
        <div css={textNSvgWrapper}>
          <PhoneSvg />
          <p
            css={css`
              ${bigBody};
              color: #ffffff;
            `}>
            066-98-98-095
          </p>
        </div>
        <div css={textNSvgWrapper}>
          <PhoneSvg />
          <p
            css={css`
              ${bigBody};
              color: #ffffff;
            `}>
            098 98 98 095
          </p>
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
