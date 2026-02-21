import { Box, Flex, Text } from "@chakra-ui/react";

function Logo(props: any) {
  return (
    <Flex alignItems="center" gap="0.25rem" {...props}>
      <Box bg="red.600" height="1.5rem" width="1.5rem"></Box>
      <Text textStyle="xl" fontWeight="bold">
        KOKOKOM
      </Text>
    </Flex>
  );
}

export default Logo;
