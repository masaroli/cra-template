import styled from 'styled-components';

export const Main = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const CTA = styled.a`
  color: ${(props) => props.theme.color.green};
`;
