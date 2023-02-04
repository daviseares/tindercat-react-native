import { Typography } from '~/components';
import { moderateVerticalScale, styled } from '~/modules';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Text = styled(Typography).attrs({ variant: 'bold' })`
  margin-top: ${moderateVerticalScale(100)}px;
  font-size: 126px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const ChatScreen = () => {
  return (
    <Wrapper>
      <Text>02</Text>
    </Wrapper>
  );
};

export default ChatScreen;
