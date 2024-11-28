import React from 'react';
import Modal from 'src/components/Modal/Modal.tsx';
import ErrorSvg from 'src/assets/icons/error.svg';
import Text from 'src/components/Text.tsx';
import {observer} from 'mobx-react-lite';
import modalsStore from 'src/stores/modalsStore.ts';
import {css} from '@emotion/react';

const RestaurantCloseModal = observer(() => {
  return (
    <Modal
      handleModal={() =>
        modalsStore.handleRestaurantClosedModal(
          !modalsStore.restaurantClosedModal,
        )
      }
      isVisible={modalsStore.restaurantClosedModal}>
      <div css={modalWrapper}>
        <ErrorSvg width={'120px'} height={'120px'} />
        <div
          css={css`
            margin-top: 24px;
            margin-bottom: 24px;
          `}>
          <Text type={'h2'}>Ми зараз зачинені!</Text>
        </div>
        <Text type={'h4'} opacity={'60%'}>
          Ви можете переглянути меню, але замовлення буде прийнято лише після
          10:00 години.
        </Text>
      </div>
    </Modal>
  );
});

const modalWrapper = theme => css`
  display: flex;
  flex-direction: column;
  width: 536px;
  align-items: center;
  text-align: center;
  @media (max-width: ${theme.media.mobile}) {
    width: 283px;
  }
`;

export default RestaurantCloseModal;
