import { colors, Flex, Spacing, Text } from 'tosslib';

interface LoadingProps {
  message?: string;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" css={{ height: '100%' }}>
      <Spacing size={8} />

      <Text fontSize={16}>{message || '로딩 중이에요'}</Text>

      <Text fontSize={12} color={colors.grey600}>
        {'잠시만 기다려 주세요.'}
      </Text>
    </Flex>
  );
};

export default Loading;
