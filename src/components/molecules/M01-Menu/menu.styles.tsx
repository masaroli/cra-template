import styled from 'styled-components';
import { respondTo } from '../../../styles/helpers/respondTo';
import { MediaQuery } from '../../../styles/mediaQueries';

export const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
`;

export const MenuList = styled.ul`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.primary};

  li {
    position: relative;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.roboto};

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:after {
      content: '';
      position: absolute;
      height: 2px;
      left: 0;
      bottom: -4px;
      right: 0;
      transform: scaleX(0);
      transform-origin: top right;
      transition: transform 300ms ease;
      background: ${({ theme }) => theme.color.secondary};
    }

    & a {
      &:before {
        display: block;
        content: attr(title);
        font-weight: 700;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
    }

    @media ${respondTo(MediaQuery.HOVER)} {
      &:hover {
        &:after {
          transform-origin: top left;
          transform: scaleX(100%);
        }
        & a {
          font-weight: 700;
        }
      }
    }
  }
`;
