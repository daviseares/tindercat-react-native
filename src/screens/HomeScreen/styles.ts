import { moderateVerticalScale, styled } from '~/modules';

export const ButtonsContainer = styled.View`
  flex: 1;
`;

export const TouchableRow = styled.View`
  margin-top: ${moderateVerticalScale(50, 0.8)}px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const SizedBox = styled.View`
  width: 20px;
`;

export const Container = styled.View`
  flex: 2;
`;

export const ToggleArea = styled.View`
  margin-top: 10px;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
`;

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const overlayLabels = {
  left: {
    title: 'NOPE',
    style: {
      label: {
        marginTop: 15,
        marginRight: 15,
        alignSelf: 'flex-end',
        borderColor: '#EC537E',
        color: '#EC537E',
        borderWidth: 2,
      },
    },
  },
  right: {
    title: 'LIKE',
    style: {
      label: {
        marginTop: 15,
        marginLeft: 15,
        alignSelf: 'flex-start',
        borderColor: '#6BD88E',
        color: '#6BD88E',
        borderWidth: 2,
      },
    },
  },
};
