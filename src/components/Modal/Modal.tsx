import React from 'react';
import {css} from '@emotion/react';
import CloseSvg from 'src/assets/icons/close.svg';
import {FloatingOverlay, FloatingPortal} from '@floating-ui/react';

const Modal = ({
  handleModal,
  isVisible,
  children,
}: {
  handleModal: (isVisible: boolean) => void;
  isVisible: boolean;
  children: React.ReactNode;
}) => {
  // if (isVisible) {
  //   document.body.style.position = 'fixed';
  // } else {
  //   document.body.style.overflow = 'visible';
  //   document.body.style.position = 'static';
  // }
  return (
    isVisible && (
      <FloatingPortal>
        <FloatingOverlay css={modalContainer} lockScroll>
          <div css={contentWrapper}>
            <div css={close} onClick={() => handleModal(!isVisible)}>
              <CloseSvg />
            </div>
            <div>{children}</div>
          </div>
        </FloatingOverlay>
      </FloatingPortal>
    )
  );
};

const contentWrapper = theme => css`
  position: relative;
  padding: 60px;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 12px;
  display: flex;
`;
const close = theme => css`
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 30px;
  svg {
    width: 32px;
    height: 32px;
    color: ${theme.colors.textPrimary};
  }
`;

const modalContainer = css`
  position: absolute;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

export default Modal;
