import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './HomePage.styles';
import { Menu } from '../../molecules/M01-Menu/menu';
import logo from '../../../assets/svg/logo.svg';

export const HomePage: FunctionComponent = observer(() => {
  return (
    <S.Main>
      <Menu />
      <S.Header className="App-header">
        <S.Logo src={logo} alt="logo" />
        <h1>yikifp CRA Template</h1>
        <S.CTA href="https://github.com/yikifp" target="_blank">
          Follow My Github
        </S.CTA>
      </S.Header>
    </S.Main>
  );
});
