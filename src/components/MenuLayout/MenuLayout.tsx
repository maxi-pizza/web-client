import React, {useEffect, useRef} from 'react';
import {css} from '@emotion/react';
import PizzaImg from 'src/assets/icons/pizza.png';
import CategoryCard from 'src/components/CategoryCard/CategoryCard.tsx';
import {useQuery} from '@tanstack/react-query';
import {productsQuery} from 'src/queries/products.query.ts';

import {observer} from 'mobx-react-lite';
import {useParams} from 'react-router-dom';
import {scrollIntoViewHorizontally} from 'src/utils/scrollIntoViewHorizontally.ts';

const MenuLayout = observer(
  ({onChangeCategory}: {onChangeCategory: (slug: string) => void}) => {
    const {data: categoryData} = useQuery(productsQuery);
    const {slug: categorySlug} = useParams() as {slug: string};
    const categories = (categoryData || []).map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      products: category.products,
    }));

    const childRefs = useRef<Record<string, HTMLAnchorElement>>(null);

    const scrollContainer = useRef(null);

    useEffect(() => {
      const containerElement = scrollContainer.current;
      const childElement = childRefs[categorySlug];
      if (containerElement && childElement) {
        scrollIntoViewHorizontally(containerElement, childElement);
      }
    }, [categorySlug]);

    return (
      <div ref={scrollContainer} css={container}>
        {categories.map(category =>
          category.products.length > 0 ? (
            <div css={categoryWrapper} key={category.name}>
              <CategoryCard
                ref={node => {
                  childRefs[category.slug] = node;
                }}
                backgroundImg={PizzaImg}
                text={category.name}
                category={category}
                onClick={() => {
                  onChangeCategory(category.slug);
                }}
                activeCategory={categorySlug}
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

  overflow: scroll;
  width: 100vw;
  padding-left: 8px;

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
