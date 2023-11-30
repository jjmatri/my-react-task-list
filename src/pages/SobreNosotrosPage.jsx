import { 
    Heading,
    Text,
    Box,
 } from "@chakra-ui/react"

export function SobreNosotrosPage() {
    return (
        <Box margin="20" display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
        <Heading color="gray.400">Sobre Nsotros</Heading>
        <Text margin="20" color="gray.500">Esta aplicación tiene como objetivo emular una lista de tareas pendientes utilizando React y Vite para su construcción. Actualmente consta de una aplicación con tres páginas a las que se puede acceder a través del menú ubicado en la parte superior. Si accede a la página "Task", es posible crear y modificar tareas con la intención de gestionar mejor nuestras actividades diarias.</Text>
        </Box>
    )
};