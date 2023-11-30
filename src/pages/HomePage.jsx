import { Heading, Text, Box } from "@chakra-ui/react";

export function HomePage() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" h="93vh">
            <Heading as="h1" size="4xl" gap="10px" padding="10px" textColor="green.300">TaskFlow</Heading>
            <Text color="gray.500">Worry not, go with the flow.</Text>
        </Box>
    )
}