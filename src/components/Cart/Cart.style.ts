import {css} from '@emotion/react';

export const cartWrapper = css`
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  overflow-y: auto;
  padding-right: 4px;
`;

export const header = css`
  margin-top: 32px;
`;

export const empty = theme => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 52vh;

  @media (min-width: ${theme.media.laptop}) {
    height: 500px;
  }
  @media (min-width: ${theme.media.pc}) {
    height: 650px;
  }
`;

export const emptyCartImage = css`
  margin-bottom: 40px;
`;

export const cart =
  ({isModal}) =>
  theme => css`
    background-color: ${isModal
      ? theme.colors.background
      : theme.colors.container};
    border: ${isModal ? 'none' : `1px solid ${theme.colors.stroke}`};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 343px;
    max-height: 100%;

    @media (min-width: ${theme.media.laptop}) {
      width: 396px;
    }
  `;

export const dottedLine = theme => css`
  height: 1px;
  border-top: 1px dashed ${theme.colors.stroke};
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
`;

export const horizontalLine = theme => css`
  height: 1px;
  background-color: ${theme.colors.stroke};
  width: 313px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
  }
`;

export const cartFooter = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-bottom: 24px;
  margin-top: 40px;
  flex-shrink: 0;
`;

export const sumWrapper = css`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const orderButton = theme => css`
  background-color: ${theme.colors.accent};
  width: 313px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;

  @media (min-width: ${theme.media.laptop}) {
    width: 348px;
    height: 53px;
  }
`;
