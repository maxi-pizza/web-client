import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import DiscountSvg from 'src/assets/icons/discount.svg';
import MakiImg from 'src/assets/icons/maki.png';
import PizzaImg from 'src/assets/icons/pizza.png';
import BurritoImg from 'src/assets/icons/burritos.png';
import SushiImg from 'src/assets/icons/sushi.png';
import ChukaImg from 'src/assets/icons/chuka-wakame.png';
import NigiriImg from 'src/assets/icons/nigiri.png';
import NoodlesImg from 'src/assets/icons/noodles.png';
import FriedImg from 'src/assets/icons/fried-potatoes.png';
import SodaImg from 'src/assets/icons/soda.png';
import GravyImg from 'src/assets/icons/gravy.png';
import DiscountCircleImg from 'src/assets/icons/discount.png';

const MenuLayout = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img
          src={String(DiscountCircleImg)}
          alt={'discount'}
          css={imgWrapper}
        />
        <DiscountSvg
          css={css`
            height: 18px;
            width: 18px;
            margin-left: 12px;
            margin-right: 8px;
          `}
        />
        <Text type={'h5'} color={theme.colors.textPrimary}>
          Акційні пропозиції
        </Text>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(PizzaImg)} alt={'pizza'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Піца
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(BurritoImg)} alt={'burrito'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Буріто
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(SushiImg)} css={imgWrapper} alt={'sushi'} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Холодні роли
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(ChukaImg)} alt={'chuka'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Гарячі роли
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(MakiImg)} alt={'maki'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Сети
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(NigiriImg)} alt={'nigiri'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Суші & Гункани
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(NoodlesImg)} alt={'noodles'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            WOK
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(FriedImg)} alt={'fried'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Снеки
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(SodaImg)} alt={'soda'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Прохолодні напої
          </Text>
        </div>
      </div>
      <div css={categoryCard}>
        <div css={redRectangle} />
        <img src={String(GravyImg)} alt={'gravy'} css={imgWrapper} />
        <div
          css={css`
            margin-left: 12px;
          `}>
          <Text type={'h5'} color={theme.colors.textPrimary}>
            Соуси
          </Text>
        </div>
      </div>
    </div>
  );
};

const categoryCard = theme => css`
  width: 223px;
  height: 53px;
  background-color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 8px;
`;

const redRectangle = theme => css`
  width: 3px;
  height: 21px;
  background-color: ${theme.colors.accent};
  position: absolute;
  left: -3px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const imgWrapper = css`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  width: 40px;
`;

export default MenuLayout;
