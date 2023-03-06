import { moderateScale, styled } from '~/modules';

const CircleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: ${moderateScale(54)}px;
  height: ${moderateScale(54)}px;
  border-radius: ${moderateScale(27)}px;
  elevation: 6;
  shadow-color: #bfbfc0;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.3;
  shadow-radius: 16px;
`;

export default CircleButton;
