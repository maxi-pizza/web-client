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
import CategoryCard from 'src/components/CategoryCard/CategoryCard.tsx';

const MenuLayout = () => {
  return (
    <div css={container}>
      <CategoryCard
        backgroundImg={DiscountCircleImg}
        text={'Акційні пропозиції'}
        svg={<DiscountSvg />}
      />
      <CategoryCard backgroundImg={PizzaImg} text={'Піца'} />
      <CategoryCard backgroundImg={BurritoImg} text={'Буріто'} />
      <CategoryCard backgroundImg={SushiImg} text={'Холодні роли'} />
      <CategoryCard backgroundImg={ChukaImg} text={'Гарячі роли'} />
      <CategoryCard backgroundImg={MakiImg} text={'Сети'} />
      <CategoryCard backgroundImg={NigiriImg} text={'Суші & Гункани'} />
      <CategoryCard backgroundImg={NoodlesImg} text={'WOK'} />
      <CategoryCard backgroundImg={FriedImg} text={'Снеки'} />
      <CategoryCard backgroundImg={SodaImg} text={'Прохолодні напої'} />
      <CategoryCard backgroundImg={GravyImg} text={'Соуси'} />
    </div>
  );
};

const container = theme => css`
  @media (max-width: ${theme.media.mobile}) {
    display: flex;
    overflow: scroll;
  }
`;

export default MenuLayout;
