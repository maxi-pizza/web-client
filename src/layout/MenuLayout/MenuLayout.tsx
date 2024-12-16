import React, {useState} from 'react';
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
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';

const MenuLayout = () => {
  const {data: categoryData} = useQuery(productsQuery);
  const categories = (categoryData || []).map(category => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }));

  const [activeCategory, setActiveCategory] = useState();

  const handleSetActive = (slug: string) => {
    setActiveCategory(slug);
  };

  return (
    <div css={container}>
      <div css={categoryWrapper}>
        <CategoryCard
          backgroundImg={DiscountCircleImg}
          text={'Акційні пропозиції'}
          svg={<DiscountSvg />}
          category={{id: 0, name: 'Акційні пропозиції', slug: 'promotions'}}
          setActive={handleSetActive}
          activeCategory={activeCategory}
        />
      </div>
      {categories.map(category => (
        <div css={categoryWrapper} key={category.name}>
          <CategoryCard
            backgroundImg={PizzaImg}
            text={category.name}
            category={category}
            setActive={handleSetActive}
            activeCategory={activeCategory}
          />
        </div>
      ))}
    </div>
  );
};

const container = theme => css`
  display: flex;
  flex-direction: row;
  width: 341px;
  overflow: scroll;

  @media (min-width: ${theme.media.tablet}) {
    width: 653px;
  }
  @media (min-width: ${theme.media.laptop}) {
    flex-direction: column;
    width: auto;
    overflow: hidden;
  }
`;

const categoryWrapper = theme => css`
  margin-right: 0;
  @media (min-width: ${theme.media.laptop}) {
    width: auto;
    margin-bottom: 8px;
  }
`;

export default MenuLayout;
