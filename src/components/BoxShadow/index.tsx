import { styled } from '~/modules';

type BoxShadowProps = {
  elevation?: number;
  shadowOpacity?: number;
};

const BoxShadow = styled.View<BoxShadowProps>`
  shadow-color: ${({ theme }) => theme.colors.tertiary};
  shadow-offset: 0px 10px;
  shadow-opacity: ${({ shadowOpacity }) =>
    shadowOpacity ? shadowOpacity : 0.3};
  shadow-radius: 16px;
`;

export default BoxShadow;
