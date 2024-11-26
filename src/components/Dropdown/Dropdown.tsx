import React, {useState} from 'react';
import {css} from '@emotion/react';
import ArrowSvg from 'src/assets/icons/arrow-left.svg';
import Text from 'src/components/Text.tsx';

const Dropdown = ({
  placeholder,
  options,
}: {
  placeholder: string;
  options: {name}[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div css={container}>
      <div css={wrapper({isOpen: open})} onClick={() => setOpen(!open)}>
        <Text type={'bigBody'}>{placeholder}</Text>
        <ArrowSvg css={svgStyle({isOpen: open})} />
      </div>
      {open && (
        <div css={dropDownWrapper({options: options})}>
          {options.map(option => (
            <div css={textStyles} key={option.name}>
              <Text type={'bigBody'}>{option.name}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const container = css`
  position: relative;
  user-select: none;
`;

const wrapper =
  ({isOpen}) =>
  theme => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: ${theme.colors.container};
    border-radius: 8px;
    border: 1px solid ${theme.colors.stroke};
    cursor: pointer;
    position: relative;
    ${isOpen
      ? '  border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;'
      : 'border-radius: 8px'}
  `;

const svgStyle = ({isOpen}) => css`
  width: 22px;
  height: 22px;
  transform: ${isOpen === false ? 'rotate(-90deg)' : 'rotate(90deg)'};
`;

const dropDownWrapper =
  ({options}) =>
  theme => css`
    background-color: ${theme.colors.container};
    border: 1px solid ${theme.colors.stroke};
    height: ${options.length * 53}px;
    width: 100%;
    position: absolute;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 7;
  `;

const textStyles = css`
  padding: 15px;
  cursor: pointer;
`;
export default Dropdown;
