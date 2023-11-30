import { Heading, Text, Box } from "@chakra-ui/react";

export function HomePage() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" h="93vh">
            <Heading as="h2" size="4xl" gap="10px" padding="10px" textColor="green.300">Lista De Tareas</Heading>
            
            <p>Una lista de tareas es, simplemente, una lista de <br></br>cosas que hacer. En ella se apunta, punto</p>
            <p> por punto, todas aquellas tareas (ya sean de nuestro trabajo o de nuestra vida privada) </p>
            
            
        </Box>
    )
}