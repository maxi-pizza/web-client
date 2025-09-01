import {observer} from 'mobx-react-lite';
import {Category} from 'src/types.ts';
import Text from 'src/components/Text.tsx';
import {css} from '@emotion/react';
import {InView} from 'react-intersection-observer';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import React from 'react';

type ProductsByCategoryProps = {
  item: Category;
  onCategoryInView: (slug: string) => void;
};

export const ProductsByCategory = observer(
  ({item, onCategoryInView}: ProductsByCategoryProps) => {
    const setInView = (inView, entry) => {
      if (inView) {
        onCategoryInView(entry.target.id);
      }
    };

    if ((item.products || []).length === 0) {
      return null;
    }
    return (
      <div>
        <div key={item.id}>
          <div css={headingWrapper}>
            <Text type={'h2'}>{item.name}</Text>
          </div>
          <div css={productsGrid} id={item.slug}>
            {item.products?.map(product => (
              <div key={product.id} css={productCard}>
                <InView onChange={setInView} threshold={1}>
                  {({ref}) => {
                    return (
                      <div css={categoryIndicator} ref={ref} id={item.slug} />
                    );
                  }}
                </InView>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

const categoryIndicator = css`
  position: absolute;
  inset: 0;
`;

const productCard = css`
  position: relative;
`;

const productsGrid = theme => css`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${theme.media.pc}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const headingWrapper = theme => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 15px;
  margin-bottom: 15px;

  svg {
    height: 24px;
    width: 24px;
  }

  @media (min-width: ${theme.media.laptop}) {
    display: flex;
    padding-top: 48px;
    margin-bottom: 32px;
    align-items: center;
    width: 100%;
    svg {
      height: 36px;
      width: 36px;
    }
  }
`;
