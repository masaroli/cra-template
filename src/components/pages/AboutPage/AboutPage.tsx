import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import * as S from './AboutPage.styles';
import { Menu } from '../../molecules/M01-Menu/menu';

export const AboutPage: FunctionComponent = observer(() => {
  return (
    <S.Main>
      <Menu />
      <S.Header className="App-header">
        <h1>Features</h1>
        <S.FeaturesList>
          <li>Styled Components</li>
          <li>GSAP</li>
          <li>Typescript</li>
          <li>Eslint / Prettier</li>
          <li>React Router</li>
        </S.FeaturesList>
      </S.Header>
    </S.Main>
  );
});
