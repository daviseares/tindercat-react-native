import { moderateScale, styled } from '~/modules';

type TextProps = {
  variant?: FontVariant;
};

const Typography = styled.Text<TextProps>`
  font-size: ${moderateScale(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme, variant }) =>
    `NunitoSans-${theme.fontsVariant[variant || 'regular']}`};
`;

export default Typography;
