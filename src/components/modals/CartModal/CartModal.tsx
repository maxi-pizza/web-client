import React from 'react';
import {css} from '@emotion/react';
import Cart from 'src/components/Cart/Cart.tsx';
import Modal from 'src/components/Modal/Modal.tsx';
import modalsStore from 'src/stores/modalsStore.ts';
import {observer} from 'mobx-react-lite';

const CartModal = observer(() => {
  return (
    <Modal
      handleModal={() => modalsStore.handleCartModal(!modalsStore.cartModal)}
      isVisible={modalsStore.cartModal}>
      <div css={container}>
        <Cart modal={true} />
      </div>
    </Modal>
  );
});

const container = css`
  width: 343px;
  height: 100%;
`;

export default CartModal;
