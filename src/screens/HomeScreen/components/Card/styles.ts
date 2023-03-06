import { Typography } from '~/components';
import {
  FastImage,
  moderateScale,
  moderateVerticalScale,
  styled,
} from '~/modules';

export const Container = styled.View`
  elevation: 6;
  shadow-color: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
  border-radius: ${moderateScale(16)}px;
  width: 100%;
  height: ${moderateVerticalScale(370, 0.8)}px;
`;

export const Image = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: white;
  height: ${moderateScale(50)}px;
  border-top-left-radius: ${moderateScale(16)}px;
  border-top-right-radius: ${moderateScale(16)}px;
  padding-top: 8px;
  padding-horizontal: 16px;
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: -2px;
`;

export const InfoName = styled(Typography).attrs({ variant: 'bold' })`
  font-size: ${moderateScale(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoBreed = styled(Typography)`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 10px;
`;

export const InfoAffection = styled(InfoName)``;
