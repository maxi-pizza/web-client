import React from 'react';
import {css} from '@emotion/react';
import * as Switch from '@radix-ui/react-switch';

const SwitchButton = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <Switch.Root
      css={container}
      onClick={() => onChange(!checked)}
      checked={checked}>
      <Switch.Thumb css={thumb} />
    </Switch.Root>
  );
};

const container = theme => css`
  width: 48px;
  height: 24px;
  border-radius: 20px;
  border: none;
  background-color: ${theme.colors.stroke};
`;

const thumb = theme => css`
  background-color: ${theme.colors.pageIndicator};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
  transition: transform 300ms;
  &[data-state='checked'] {
    transform: translateX(24px);
    background-color: ${theme.colors.accent};
  }
`;

export default SwitchButton;
