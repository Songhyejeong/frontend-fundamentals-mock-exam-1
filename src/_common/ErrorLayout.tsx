import { Spacing, Text, Flex, colors } from 'tosslib';

interface ErrorLayoutProps {
  message: string;
  description?: string;
}

const ErrorLayout = ({ message, description }: ErrorLayoutProps) => {
  return (
    <Flex direction="column" alignItems="center" style={{ height: '100vh', padding: '0 16px' }}>
      <Spacing size={24} />

      <Text fontSize={16} fontWeight="bold" color={colors.grey800}>
        {message}
      </Text>

      {description && (
        <Text fontSize={14} color={colors.grey600}>
          {description}
        </Text>
      )}
    </Flex>
  );
};

export default ErrorLayout;
