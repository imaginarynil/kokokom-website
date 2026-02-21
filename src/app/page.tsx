import NavBar from "@/app/components/NavBar";
import { Box, Button, Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <NavBar />
      <Box background="red.500" width="100%" color="white">
        <Container maxWidth="sm" py="4rem">
          <Text textStyle="lg" marginBottom="0.5rem">
            Empowering Business with Expert IT Support
          </Text>
          <Button variant="subtle">Contact Us</Button>
        </Container>
      </Box>
    </>
  );
}
