import React from 'react';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/styles/theme.ts';
import DeleteSvg from 'src/assets/icons/close.svg?react';
import ProductCard from 'src/components/ProductCard/ProductCard.tsx';
import FavoriteEmptyBackground from 'src/assets/FavoriteEmpty.png';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {productsQuery} from 'src/domains/Home/products.query.ts';
import {
  removeAllItemsFromWishlist,
  WISHLIST_QUERY_KEY,
  wishlistQuery,
} from 'src/domains/Favorite/wishlist.query.ts';

const Favorite = () => {
  const {data: productsData} = useQuery(productsQuery);
  const {data: wishlistData} = useQuery(wishlistQuery);
  const queryClient = useQueryClient();

  const products = (productsData || []).flatMap(category => category.products);
  const productsInWishlist = (wishlistData || []).flatMap(id =>
    products.filter(product => product.id === id),
  );

  const {mutate: wishlistMutation} = useMutation({
    mutationFn: () => removeAllItemsFromWishlist(),
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [WISHLIST_QUERY_KEY]}),
  });

  const theme = useTheme() as WhiteTheme;
  return (
    <div css={container}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 130px;
          width: 343px;
          margin-bottom: 25px;
          @media (min-width: ${theme.media.tablet}) {
            width: 652px;
          }
          @media (min-width: ${theme.media.laptop}) {
            width: 1304px;
            margin-bottom: 32px;
          }
          @media (min-width: ${theme.media.pc}) {
            width: 1656px;
          }
        `}>
        <div
          css={css`
            display: flex;
          `}>
          <div
            css={css`
              margin-right: 8px;
            `}>
            <Text type={'bigBody'}>Головна</Text>
          </div>
          <Text type={'bigBody'} color={theme.colors.accent}>
            / Улюблені страви
          </Text>
        </div>
        {productsInWishlist.length < 1 ? (
          <div css={mobileWrapper}>
            <Text type={'h1'}>Хм... тут поки пусто</Text>
            <div
              css={css`
                margin-top: 24px;
                width: 343px;
                @media (min-width: ${theme.media.laptop}) {
                  width: 536px;
                }
              `}>
              <Text type={'bigBody'} opacity={'60%'}>
                Ви ще не додали жодної страви до улюблених, але це легко
                виправити — просто виберіть свої фаворити на головній, і вони
                з'являться тут!
              </Text>
            </div>
          </div>
        ) : null}
      </div>
      {productsInWishlist.length > 0 ? (
        <div css={contentWrapper}>
          <div css={headingWrapper}>
            <Text type={'h1'}>Те, що вам подобається</Text>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                position: relative;
                @media (min-width: ${theme.media.laptop}) {
                  margin-top: 0;
                }
              `}>
              <div css={deleteButtonWrapper}>
                <DeleteSvg color={theme.colors.accent} />
                <Text type={'h5'} color={theme.colors.accent}>
                  Очистити все
                </Text>
              </div>
              <button css={deleteButton} onClick={() => wishlistMutation()} />
            </div>
          </div>
          <div css={productsGrid}>
            {productsInWishlist.map(product => (
              <ProductCard product={product} key={product.name} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const container = theme => css`
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${FavoriteEmptyBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const mobileWrapper = css`
  min-height: 100vh;
`;

const contentWrapper = theme => css`
  padding-bottom: 172px;
  min-height: 680px;
  width: 343px;

  @media (min-width: ${theme.media.tablet}) {
    width: 702px;
  }
  @media (min-width: ${theme.media.laptop}) {
    width: 1312px;
  }
  @media (min-width: ${theme.media.pc}) {
    width: 1654px;
  }
`;

const headingWrapper = theme => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (min-width: ${theme.media.tablet}) {
    justify-content: space-between;
    flex-direction: unset;
    align-items: flex-end;
  }
  @media (min-width: ${theme.media.laptop}) {
    margin-bottom: 32px;
    align-items: center;
  }
`;

const deleteButtonWrapper = css`
  display: flex;
  align-items: center;
  position: absolute;
`;

const deleteButton = theme => css`
  background-color: ${theme.colors.accent};
  border: none;
  opacity: 20%;
  border-radius: 8px;
  cursor: pointer;
  width: 343px;
  height: 48px;
  @media (min-width: ${theme.media.tablet}) {
    width: 183px;
  }

  @media (min-width: ${theme.media.pc}) {
    width: 183px;
    height: 53px;
  }
`;

const productsGrid = theme => css`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: ${theme.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${theme.media.laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: ${theme.media.pc}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default Favorite;
