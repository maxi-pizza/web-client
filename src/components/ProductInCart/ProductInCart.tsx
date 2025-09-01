import React from 'react';
import Text from 'src/components/Text.tsx';
import Counter from 'src/components/Counter/Counter.tsx';
import TrashSvg from 'src/assets/icons/trash.svg?react';
import {css, useTheme} from '@emotion/react';
import {WhiteTheme} from 'src/theme.ts';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {CART_QUERY_KEY, cartQuery, setItem} from 'src/queries/cart.query.ts';

type ProductInCartProp = {
  id: number;
  name: string;
  price: string;
};

const ProductInCart = ({product}: {product: ProductInCartProp}) => {
  const theme = useTheme() as WhiteTheme;
  const queryClient = useQueryClient();
  const {data: cartData} = useQuery(cartQuery);
  const {mutate: cartMutation} = useMutation({
    mutationKey: [CART_QUERY_KEY],
    mutationFn: ({price, count}: {price: number; count: number}) =>
      setItem(product.id, price, count),
    onSuccess: () =>
      queryClient.invalidateQueries({queryKey: [CART_QUERY_KEY]}),
  });
  const formattedPrice = parseInt(product.price);
  const count = cartData?.[product.id]?.count || 0;

  const onHandlePlus = () => {
    cartMutation({price: formattedPrice, count: count + 1});
  };

  const onHandleMinus = () => {
    cartMutation({price: formattedPrice, count: Math.max(count - 1, 0)});
  };

  const onHandleRemove = () => {
    cartMutation({price: formattedPrice, count: 0});
  };

  return (
    <div css={cartItemWrapper}>
      <div css={cartItemTextWrapper}>
        <Text type={'h5'}>{product.name}</Text>
        <Text type={'h5'}>{String(formattedPrice)} грн</Text>
      </div>
      <div css={buttonsWrapper}>
        <Counter
          onHandlePlus={onHandlePlus}
          count={count}
          onHandleMinus={onHandleMinus}
        />
        <button onClick={onHandleRemove} css={deleteButtonWrapper}>
          <div css={deleteButton} />
          <TrashSvg css={deleteButtonIcon} color={theme.colors.accent} />
        </button>
      </div>
    </div>
  );
};

const deleteButtonIcon = css`
  position: absolute;
  cursor: pointer;
`;

const cartItemWrapper = theme => css`
  margin-top: 32px;
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
`;

const cartItemTextWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const buttonsWrapper = css`
  margin-top: 14px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const deleteButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 20%;
`;
const deleteButtonWrapper = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export default ProductInCart;
