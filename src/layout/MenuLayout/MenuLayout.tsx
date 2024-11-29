import React from 'react';
import {css} from '@emotion/react';
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
import CategoryCard from 'src/components/CategoryCard/CategoryCard.tsx';

const MenuLayout = () => {
  return (
    <div css={container}>
      <div css={categoryWrapper}>
        <CategoryCard
          backgroundImg={DiscountCircleImg}
          text={'Акційні пропозиції'}
          svg={<DiscountSvg />}
        />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={PizzaImg} text={'Піца'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={BurritoImg} text={'Буріто'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={SushiImg} text={'Холодні роли'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={ChukaImg} text={'Гарячі роли'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={MakiImg} text={'Сети'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={NigiriImg} text={'Суші & Гункани'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={NoodlesImg} text={'WOK'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={FriedImg} text={'Снеки'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={SodaImg} text={'Прохолодні напої'} />
      </div>
      <div css={categoryWrapper}>
        <CategoryCard backgroundImg={GravyImg} text={'Соуси'} />
      </div>
    </div>
  );
};

const container = theme => css`
  display: flex;
  flex-direction: column;
  @media (min-width: ${theme.media.mobile}) {
    display: flex;
    flex-direction: row;
    width: 341px;
    overflow: scroll;
  }
  @media (min-width: ${theme.media.mobile}) {
    display: flex;
    flex-direction: row;
    overflow: scroll;
  }
`;

const categoryWrapper = theme => css`
  margin-right: 0;
  @media (min-width: ${theme.media.mobile}) {
    margin-right: 8px;
  }
`;

export default MenuLayout;
