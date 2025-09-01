import React, {useRef} from 'react';
import {css} from '@emotion/react';
import CloseSvg from 'src/assets/icons/close.svg?react';
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
  const overlayRef = useRef(null);
  const onClose = e => {
    if (e.target === overlayRef.current) {
      handleModal(!isVisible);
    }
  };
  return (
    isVisible && (
      <FloatingPortal>
        <FloatingOverlay
          onClick={e => onClose(e)}
          ref={overlayRef}
          css={modalContainer}
          lockScroll>
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
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.stroke};
  border-radius: 12px;
  display: flex;
  max-height: 90%;
`;
const close = theme => css`
  position: absolute;
  cursor: pointer;
  top: 17px;
  right: 17px;
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.textPrimary};
  }
  @media (min-width: ${theme.laptop}) {
    top: 30px;
    right: 30px;
    svg {
      width: 32px;
      height: 32px;
    }
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
`;

export default Modal;
