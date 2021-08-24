import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import * as S from './menu.styles';
import { Paths } from '../../../data/enum/paths';
export const Menu: FunctionComponent = () => {
  return (
    <S.MenuWrapper>
      <S.MenuList>
        <li>
          <Link to={Paths.INDEX} title="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to={Paths.ABOUT} title="About">
            About
          </Link>
        </li>
      </S.MenuList>
    </S.MenuWrapper>
  );
};
