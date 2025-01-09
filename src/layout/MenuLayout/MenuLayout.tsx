import React from 'react';
import {css} from '@emotion/react';
import DiscountSvg from 'src/assets/icons/discount.svg';
import PizzaImg from 'src/assets/icons/pizza.png';
import DiscountCircleImg from 'src/assets/icons/discount.png';
import CategoryCard from 'src/components/CategoryCard/CategoryCard.tsx';
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import categoryStore from 'src/stores/categoryStore.ts';
import {observer} from 'mobx-react-lite';
import {options} from 'axios';

const MenuLayout = observer(
  ({onScrollToCategory}: {onScrollToCategory: (i: number) => void}) => {
    const {data: categoryData} = useQuery(productsQuery);
    const categories = (categoryData || []).map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      products: category.products,
    }));

    const handleSetActive = (slug: string, index: number) => {
      if (slug) {
        categoryStore.changeCategory(slug);
        onScrollToCategory(index);
      }
    };

    return (
      <div css={container}>
        {/*<div css={categoryWrapper}>*/}
        {/*  <CategoryCard*/}
        {/*    backgroundImg={DiscountCircleImg}*/}
        {/*    text={'Акційні пропозиції'}*/}
        {/*    svg={<DiscountSvg />}*/}
        {/*    category={{id: 0, name: 'Акційні пропозиції', slug: 'promotions'}}*/}
        {/*    setActive={handleSetActive}*/}
        {/*    activeCategory={categoryStore.categorySlug}*/}
        {/*  />*/}
        {/*</div>*/}
        {categories.map((category, index) =>
          category.products.length > 0 ? (
            <div css={categoryWrapper} key={category.name}>
              <CategoryCard
                backgroundImg={PizzaImg}
                text={category.name}
                category={category}
                setActive={() => handleSetActive(category.slug, index)}
                activeCategory={categoryStore.categorySlug}
              />
            </div>
          ) : null,
        )}
      </div>
    );
  },
);

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
