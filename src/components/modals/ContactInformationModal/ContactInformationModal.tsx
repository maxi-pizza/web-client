import React from 'react';
import Modal from 'src/components/Modal/Modal.tsx';
import modalsStore from 'src/stores/modalsStore.ts';
import {observer} from 'mobx-react-lite';
import {css, useTheme} from '@emotion/react';
import Text from 'src/components/Text.tsx';

import DistanceSvg from 'src/assets/icons/distance.svg?react';
import PaceSvg from 'src/assets/icons/pace.svg?react';
import PhoneSvg from 'src/assets/icons/phone.svg?react';
import InstagramSvg from 'src/assets/icons/instagram.svg?react';
import {Link} from 'react-router-dom';
import {WhiteTheme} from 'src/styles/theme.ts';

const ContactInformationModal = observer(() => {
  const theme = useTheme() as WhiteTheme;
  return (
    <Modal
      handleModal={() =>
        modalsStore.handleContactInformationModal(
          !modalsStore.contactInformationModal,
        )
      }
      isVisible={modalsStore.contactInformationModal}>
      <div css={container}>
        <div
          css={css`
            margin-bottom: 14px;
          `}>
          <Text type={'h3'}>Контактна інформація:</Text>
        </div>
        <div css={textNSvgWrapper}>
          <DistanceSvg />
          <Text type={'bigBody'}>ЖК Артвилль, вул. Спрейса 1, Одеса</Text>
        </div>
        <div css={horizontalBar} />
        <div css={textNSvgWrapper}>
          <PaceSvg />
          <Text type={'bigBody'}>10:00-22:00</Text>
        </div>
        <div css={horizontalBar} />
        <div css={textNSvgWrapper}>
          <PhoneSvg />
          <Text type={'bigBody'}>066-98-98-095</Text>
        </div>
        <div css={horizontalBar} />
        <div css={textNSvgWrapper}>
          <PhoneSvg />
          <Text type={'bigBody'}>098 98 98 095</Text>
        </div>

        <Link
          target={'_blank'}
          to={'https://www.instagram.com/maxipizza.art/'}
          css={[
            textNSvgWrapper,
            css({
              ':hover': {
                textDecoration: 'underline',
              },
            }),
          ]}>
          <InstagramSvg color={theme.colors.accent} />

          <Text type={'bigBody'}> maxipizza.art</Text>
        </Link>
      </div>
    </Modal>
  );
});

const container = css`
  width: 343px;
  height: 320px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const horizontalBar = theme => css`
  width: 22px;
  height: 1px;
  background-color: ${theme.colors.stroke};
  border-radius: 1px;
`;

const textNSvgWrapper = theme => css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
  justify-content: center;
  svg {
    height: 20px;
    width: 20px;
    color: ${theme.colors.accent};
    margin-right: 8px;
  }
`;

export default ContactInformationModal;
