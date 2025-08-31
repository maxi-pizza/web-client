import React from 'react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/styles/theme.ts';
import Text from 'src/components/Text.tsx';
import VariantImg from 'src/assets/icons/radio_button_partial.svg?react';
import PlusSvg from 'src/assets/icons/plus.svg?react';
import FavoriteSvg from 'src/assets/icons/favorite.svg?react';
import FavoriteFilledSvg from 'src/assets/icons/favoriteFilled.svg?react';
import {
  DefaultError,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Counter from './Counter';
import {
  CART_QUERY_KEY,
  cartQuery,
  setItem,
} from 'src/domains/Cart/cart.query.ts';
import {
  setItemToWishlist,
  WISHLIST_QUERY_KEY,
  wishlistQuery,
} from 'src/domains/Favorite/wishlist.query.ts';
import Logo from 'src/assets/logo.png';
import {Product} from 'src/types.ts';
import {publicStorage} from 'src/utils/publicStorage.ts';
import {ShowMore} from '@re-dev/react-truncate';

const ProductCard = ({product}: {product: Product}) => {
  const theme = useTheme() as WhiteTheme;
  const queryClient = useQueryClient();
  const {data: cartData} = useQuery({
    ...cartQuery,
    select: data => data[product.id],
  });
  const {data: wishlistData} = useQuery({
    ...wishlistQuery,
    select: data => data.find(item => item === product.id),
  });

  const {mutate: cartMutation} = useMutation({
    mutationFn: ({price, count}: {price: number; count: number}) =>
      setItem(product.id, price, count),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [CART_QUERY_KEY],
      }),
  });
  const {mutate: wishlistMutation} = useMutation<
    unknown,
    DefaultError,
    {
      id: number;
    }
  >({
    mutationFn: ({id}) => setItemToWishlist(id),
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [WISHLIST_QUERY_KEY]}),
  });
  const addToWishlist = () => {
    wishlistMutation({id: product.id});
  };

  const count = cartData?.count || 0;
  const formattedPrice = parseInt(product.price);
  const addToCart = () => {
    cartMutation({price: formattedPrice, count: count + 1});
  };
  const incrementCount = () => {
    cartMutation({price: formattedPrice, count: count + 1});
  };

  const decrementCount = () => {
    cartMutation({price: formattedPrice, count: count - 1});
  };

  const favorite = Number(wishlistData) === Number(product.id);

  const image = product.images[0]
    ? publicStorage(product.images[0].full)
    : product.image;

  return (
    <div css={container}>
      {/*<div css={discountWrapper}>*/}
      {/*  <div*/}
      {/*    css={css`*/}
      {/*      position: absolute;*/}
      {/*    `}>*/}
      {/*    <Text type={'subscribe'}>20 %</Text>*/}
      {/*  </div>*/}
      {/*  <BgDiscountSvg />*/}
      {/*</div>*/}
      <div css={imgBackground}>
        {image ? (
          <img src={image} alt={'product'} css={imgStyles} />
        ) : (
          <div css={imgStyles}>
            <img src={String(Logo)} alt={'product'} css={placeholderImg} />
          </div>
        )}
      </div>
      <div css={wrapper}>
        <div css={css``}>
          <Text type={'h4'}>{product.name}</Text>
        </div>

        <div css={textWrapper}>
          <Text type={'caption'}>
            <ShowMore more={''} lines={3}>
              Склад: {product.description || ''}
            </ShowMore>
          </Text>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
          `}>
          <div css={variantWrapper}>
            <div css={variantStyle({isActive: true})}>
              <VariantImg color={theme.colors.accent} />
              <Text type={'title'} color={theme.colors.accent}>
                30 см
              </Text>
            </div>
            <div css={variantStyle({isActive: false})}>
              <VariantImg color={theme.colors.textPrimary} />
              <Text type={'title'} color={theme.colors.textPrimary}>
                45 см
              </Text>
            </div>
          </div>
          <div css={weightWrapper}>
            <Text type={'title'} color={theme.colors.textPrimary}>
              {`${product.weight ?? 0} ${product.unit}.`}
            </Text>
          </div>
        </div>
        <div css={priceAndButtonsWrapper}>
          <div css={pricesWrapper}>
            {/*<div css={priceStyles}>*/}
            {/*  <Text type={'h5'}>399 грн</Text>*/}
            {/*</div>*/}
            <Text type={'h4'}>{String(formattedPrice)} грн</Text>
          </div>
          <div css={buttonWrapper}>
            {count ? (
              <Counter
                onHandlePlus={incrementCount}
                onHandleMinus={decrementCount}
                count={count}
              />
            ) : (
              <button css={addButton} onClick={addToCart}>
                <PlusSvg />
              </button>
            )}
          </div>
        </div>
      </div>
      <button css={addToFavorite} onClick={() => addToWishlist()}>
        {favorite ? <FavoriteFilledSvg /> : <FavoriteSvg />}
      </button>
    </div>
  );
};
const imgStyles = theme => css`
  width: 343px;
  height: 188px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: contain;
  background-color: ${theme.colors.backgroundImg};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.media.laptop}) {
    width: 318px;
    height: 250px;
  }
`;

const placeholderImg = theme => css`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  @media (min-width: ${theme.media.laptop}) {
    width: 250px;
  }
`;

const imgBackground = theme => css`
  background-color: ${theme.colors.backgroundImg};
`;

const container = theme => css`
  width: 343px;
  height: 401px;
  border-radius: 12px;
  border: 1px solid ${theme.colors.stroke};
  background-color: ${theme.colors.container};
  position: relative;
  @media (min-width: ${theme.media.laptop}) {
    width: 318px;
    height: 501px;
  }
`;

const wrapper = theme => css`
  margin: 15px;

  @media (min-width: ${theme.media.laptop}) {
    margin: 24px 16px;
  }
`;

const textWrapper = theme => css`
  margin-bottom: 12px;
  min-height: 57px;
  @media (min-width: ${theme.media.laptop}) {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;

const variantWrapper = css`
  display: none;
`;
const variantStyle =
  ({isActive}) =>
  theme => css`
    width: 81px;
    height: 29px;
    display: flex;
    ${isActive
      ? {
          border: `1px solid ${theme.colors.accent}`,
          borderRadius: '20px',
        }
      : null}
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    margin-right: 8px;

    @media (min-width: ${theme.media.laptop}) {
      height: 32px;
      width: 89px;
    }
  `;

const weightWrapper = css`
  opacity: 30%;
  display: flex;
  justify-content: flex-end;
`;

const priceAndButtonsWrapper = theme => css`
  display: flex;
  justify-content: space-between;

  //margin-top: 12px; 12px with modificators and 24px without
  margin-top: 24px;

  @media (min-width: ${theme.media.laptop}) {
    //margin-top: 17px; 17px with modificators and 34px without
    margin-top: 34px;
  }
`;

const pricesWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const buttonWrapper = css`
  display: flex;
`;

const addButton = theme => css`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 6px;
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.textWhite};

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: ${theme.media.laptop}) {
    width: 48px;
    height: 48px;
  }
`;

const addToFavorite = theme => css`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 44px;
  height: 44px;
  color: ${theme.colors.accent};
  svg {
    width: 20px;
    height: 20px;
  }
  border: 1px solid ${theme.colors.stroke};
  border-radius: 6px;
  display: flex;
  background-color: ${theme.colors.container};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: ${theme.media.laptop}) {
    width: 48px;
    height: 48px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default ProductCard;
