import React from 'react';
import Modal from 'src/components/Modal/Modal.tsx';
import ErrorSvg from 'src/assets/icons/error.svg?react';
import Text from 'src/components/Text.tsx';
import {observer} from 'mobx-react-lite';
import modalsStore from 'src/stores/modalsStore.ts';
import {css} from '@emotion/react';
import {ModalEnum} from 'src/contants.ts';

const RestaurantCloseModal = observer(() => {
  const handleClose = () => {
    modalsStore.close(ModalEnum.RestaurantClosed);
  };
  return (
    <Modal
      onClose={handleClose}
      isVisible={modalsStore.isOpen(ModalEnum.RestaurantClosed)}>
      <div css={modalWrapper}>
        <ErrorSvg width={'120px'} height={'120px'} />
        <div css={title}>
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

const title = css`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const modalWrapper = theme => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 283px;
  padding: 30px;

  @media (min-width: ${theme.media.tablet}) {
    width: 536px;
    padding: 60px;
  }
`;

export default RestaurantCloseModal;
