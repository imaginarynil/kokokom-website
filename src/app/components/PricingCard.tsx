import { Card, Flex, Text } from "@chakra-ui/react";

function PricingCard() {
  return (
    <Card.Root width="15rem">
      <Card.Body gap="2">
        <Card.Title mt="2">IT Service</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Description>
        <Flex direction="column">
          <Text>Starts from</Text>
          <Text>
            <Text as="span" fontSize="2xl">
              Rp250.000
            </Text>{" "}
            / job
          </Text>
        </Flex>
      </Card.Body>
    </Card.Root>
  );
}

export default PricingCard;
