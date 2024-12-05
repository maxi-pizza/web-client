import React from 'react';
import {css} from '@emotion/react';

const HeaderButton = ({
  icon,
  handleButton,
}: {
  icon: React.ReactNode;
  handleButton?: (a: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <button onClick={a => handleButton(a)} css={container}>
      {icon}
    </button>
  );
};

const container = theme => css`
  width: 44px;
  height: 44px;
  background-color: ${theme.colors.container};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.stroke};
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.accent};
  }
`;

export default HeaderButton;
