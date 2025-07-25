import React from 'react';
import {css, useTheme} from '@emotion/react';
import logo from 'src/assets/logo.png';
import DistanceSvg from 'src/assets/icons/distance.svg';
import PaceSvg from 'src/assets/icons/pace.svg';
import PhoneSvg from 'src/assets/icons/phone.svg';
import FavouriteSvg from 'src/assets/icons/favorite.svg';
import Text from 'src/components/Text.tsx';
import HeaderButton from 'src/components/HeaderButton/HeaderButton.tsx';
import CartSvg from 'src/assets/icons/cart.svg';
import SearchSvg from 'src/assets/icons/search.svg';
import {WhiteTheme} from 'src/styles/theme.ts';
import {Link} from 'react-router-dom';
import {favoriteRoute, rootRoute} from 'src/routes.ts';
import modalsStore from 'src/stores/modalsStore.ts';

const Header = () => {
  const theme = useTheme() as WhiteTheme;
  return (
    <div css={headerContainer}>
      <div css={wrapper}>
        <Link to={rootRoute}>
          <img css={logoStyles} src={String(logo)} alt={'logo'} />
        </Link>
        <div css={contentWrapper}>
          <div css={textNSvgWrapper}>
            <DistanceSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>ЖК Артвилль, вул. Спрейса 1, Одеса</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PaceSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>10:00-22:00</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>066-98-98-095</Text>
          </div>
          <div css={verticalBar} />
          <div css={textNSvgWrapper}>
            <PhoneSvg color={theme.colors.accent} />
            <Text type={'bigBody'}>098 98 98 095</Text>
          </div>
        </div>
      </div>
      <Link css={button} to={favoriteRoute}>
        <FavouriteSvg color={theme.colors.accent} />
        <Text type={'subscribe'}>Улюблені страви</Text>
      </Link>
      <div css={mobileHeaderMenu}>
        <HeaderButton
          icon={<SearchSvg />}
          handleButton={() => {
            modalsStore.handleSearchModal(!modalsStore.searchModal);
          }}
        />
        <HeaderButton
          handleButton={() =>
            modalsStore.handleContactInformationModal(
              !modalsStore.contactInformationModal,
            )
          }
          icon={<DistanceSvg />}
        />
        <Link to={favoriteRoute}>
          <HeaderButton
            icon={<FavouriteSvg />}
            handleButton={() => {
              return;
            }}
          />
        </Link>
        <HeaderButton
          handleButton={() =>
            modalsStore.handleCartModal(!modalsStore.cartModal)
          }
          icon={<CartSvg />}
        />
      </div>
    </div>
  );
};

const headerContainer = theme => css`
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  height: 80px;
  @media (min-width: ${theme.media.laptop}) {
    height: 92px;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
  }
`;

const logoStyles = theme => css`
  width: 68px;
  height: 50px;
  margin-left: 16px;
  @media (min-width: ${theme.media.tablet}) {
    margin-left: 32px;
  }
  @media (min-width: ${theme.media.laptop}) {
    width: 81px;
    height: 60px;
  }
  @media (min-width: ${theme.media.pc}) {
    margin-right: 56px;
  }
`;

const verticalBar = css`
  background-color: #d3d3dd;
  width: 1px;
  height: 22px;
`;

const contentWrapper = theme => css`
  display: none;
  @media (min-width: ${theme.media.laptop}) {
    display: flex;
  }
`;

const wrapper = theme => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0;

  @media (min-width: ${theme.media.pc}) {
    margin-left: 132px;
  }
`;

const textNSvgWrapper = css`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  svg {
    margin-right: 8px;
  }
`;

const button = theme => css`
  display: none;

  @media (min-width: ${theme.media.laptop}) {
    width: 194px;
    height: 48px;
    background-color: ${theme.colors.container};
    border: 1px solid ${theme.colors.stroke};
    border-radius: 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :hover {
      border: 1px solid ${theme.colors.accent};
    }
    margin-right: 32px;
  }
  @media (min-width: ${theme.media.pc}) {
    margin-right: 132px;
  }
`;

const mobileHeaderMenu = theme => css`
  display: flex;
  justify-content: space-between;
  width: 194px;
  margin-right: 16px;
  @media (min-width: ${theme.media.tablet}) {
    margin-right: 32px;
  }
  @media (min-width: ${theme.media.laptop}) {
    display: none;
  }
`;

export default Header;
