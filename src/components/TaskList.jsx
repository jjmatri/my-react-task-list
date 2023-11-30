import { useContext } from "react";
import { Task } from "./Task"
import { taskListContext } from "../pages/TareasPage";
import { Box, Heading, Checkbox, Text, Button, Spacer, Divider } from "@chakra-ui/react";
import { Header } from "./Header";

export function TaskList() {
    const { taskList, setTaskList, deleteAll } = useContext(taskListContext);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading margin="2" marginBottom="0" padding="4"  paddingBottom="6" borderRadius="3xl" borderBottomRadius="none" paddingLeft="100" paddingRight="100" bgColor="green.200" color="gray.600">Task List</Heading>

            <Box w="80vh" display="flex" justifyContent="center" bg="green.20" borderRadius="3xl" padding="4" flexDirection="column">
                <Header />
                <Box display="flex" justifyContent="center" flexDirection="column">
               
                    {taskList.map((task) => (
                        
                        <Task task={task} key={task.id} />
                    ))}
                </Box>
                <Divider margin="2" />
                <Box display="flex" margin="2" justifyContent="center" alignItems="center">
                    <Text color="gray.500">You have {taskList.length} pending task(s)</Text>
                    <Spacer />
                    <Button colorScheme="green" color="green.50" bgColor="green.400" onClick={() => deleteAll(setTaskList)}>Delete All</Button>
                </Box>
            </Box>
        </Box>
    );
};