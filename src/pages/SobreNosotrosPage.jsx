import { 
    Heading,
    Text,
    Box,
 } from "@chakra-ui/react"

export function SobreNosotrosPage() {
    return (
        <Box margin="20" display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
        <Heading color="gray.400">About us</Heading>
        <Text margin="20" color="gray.500">This application aims to emulate a to-do list using React and Vite for its construction. Currently, it consists of an application with three pages that can be accessed through the menu located at the top. If you access the "Tasks" page, it's possible to create and modify tasks with the intention of better managing our daily activities.</Text>
        </Box>
    )
};