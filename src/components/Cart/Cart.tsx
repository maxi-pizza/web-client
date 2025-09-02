import React, {Fragment, memo} from 'react';
import {useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';
import {WhiteTheme} from 'src/theme.ts';
import ProductInCart from 'src/components/ProductInCart/ProductInCart.tsx';
import {Link} from 'react-router-dom';
import {checkoutRoute} from 'src/routes.ts';
import {useQuery} from '@tanstack/react-query';
import {cartQuery} from 'src/queries/cart.query.ts';
import {productsQuery} from 'src/queries/products.query.ts';
import EmptyCartSvg from 'src/assets/icons/emtyCart.svg?react';
import modalsStore from 'src/stores/modalsStore.ts';
import {useIsMobile, useIsTablet} from 'src/hooks/useMedia.ts';
import * as styles from './Cart.style.ts';
import {ModalEnum} from 'src/contants.ts';

const Cart = memo(
  ({
    withOrderButton = true,
    modal = false,
  }: {
    withOrderButton?: boolean;
    modal?: boolean;
  }) => {
    const theme = useTheme() as WhiteTheme;
    const {data: cartData} = useQuery(cartQuery);
    const {data: productsData} = useQuery(productsQuery);

    const ids = Object.keys(cartData || {});

    const productsArray = (productsData || []).flatMap(c => c.products);
    const productsInCart = productsArray.filter(product =>
      ids.includes(String(product.id)),
    );

    const sum = ids.reduce((acc, id) => {
      return acc + cartData[id]?.count * cartData[id]?.price;
    }, 0);

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    return (
      <div css={styles.cart({isModal: modal})}>
        <div css={styles.header}>
          <Text type={'h3'}>Ваше замовлення</Text>
        </div>
        {productsInCart.length > 0 ? (
          <>
            <div css={styles.cartWrapper}>
              {productsInCart.map(p => (
                <Fragment key={p.id}>
                  <ProductInCart product={p} />
                  <div css={styles.dottedLine} />
                </Fragment>
              ))}
            </div>
            <div css={styles.cartFooter}>
              <div css={styles.horizontalLine} />
              <div css={styles.sumWrapper}>
                <Text type={'h4'}>Всього:</Text>
                <Text type={'h4'}>{String(sum)} грн</Text>
              </div>
              {withOrderButton && (
                <Link
                  css={styles.orderButton}
                  to={checkoutRoute}
                  onClick={() => {
                    if (isMobile || isTablet) {
                      modalsStore.open(ModalEnum.Cart);
                    }
                  }}>
                  <Text type={'h5'} color={theme.colors.textWhite}>
                    Замовити
                  </Text>
                </Link>
              )}
            </div>
          </>
        ) : (
          <div css={styles.empty}>
            <div css={styles.emptyCartImage}>
              <EmptyCartSvg color={theme.colors.pageIndicator} />
            </div>
            <Text type={'bigBody'}>Ви ще не додали жодного товару.</Text>
          </div>
        )}
      </div>
    );
  },
);

export default Cart;
