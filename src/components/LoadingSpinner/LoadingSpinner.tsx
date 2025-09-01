import React from 'react';
import {css, useTheme} from '@emotion/react';
import {FloatingOverlay, FloatingPortal} from '@floating-ui/react';
import {FadeLoader} from 'react-spinners';
import {WhiteTheme} from 'src/theme.ts';

const LoadingSpinner = ({
  children,
  isLoading,
}: {
  children: React.JSX.Element;
  isLoading: boolean;
}) => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div
      css={css`
        height: 100%;
      `}>
      {isLoading && (
        <FloatingPortal>
          <FloatingOverlay
            lockScroll
            css={css`
              position: relative;
              z-index: 5;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: black;
              opacity: 0.7;
            `}
          />
          <div
            css={css`
              z-index: 7;
              position: fixed;
              top: 50%;
              left: 50%;
              transform-origin: center;
              transform: translate(-50%, -50%);
            `}>
            <FadeLoader
              color={'white'}
              width={3}
              height={12}
              margin={10}
              loading={true}
            />
          </div>
        </FloatingPortal>
      )}

      <div>{children}</div>
    </div>
  );
};

export default LoadingSpinner;
