import { useContext, useState } from "react";
import { taskListContext } from "../pages/TareasPage";
import { Box, Text, Spacer, Button, Input } from "@chakra-ui/react"

export function Task(props) {

    const { task } = props;
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState(task.task);
    const [newDescription, setNewDescription] = useState(task.description)
    const { taskList, setTaskList, deleteTask, updateTask } = useContext(taskListContext);

    if (edit) {
        return (
            <Box bgColor="green.100" margin="2" padding="4" borderRadius="2xl" display="flex" alignItems="center" marginBottom="0">
                    <Input marginLeft="2" type="text" placeholder="new title" value={newTitle} w="auto" variant="filled" color="green.800" onChange={(e) => setNewTitle(e.target.value)} />
                    <Spacer />
                    <Button colorScheme='green' variant="ghost" onClick={() => {
                        updateTask(task, newTitle, newDescription, taskList, setTaskList);
                        setEdit(false);
                    }}>✔️</Button>
                    <Button colorScheme='green' variant="ghost" onClick={() => {
                        setEdit(false);
                        setNewTitle(task.task);
                        setNewDescription(task.description);
                    }}>✖️</Button>
            </Box>
        )
    }
    return (
        <Box bgColor="green.100" margin="2" padding="4" borderRadius="2xl" display="flex" alignItems="center" marginBottom="0">
            <Text marginLeft="2" color="gray.500">{task.task}</Text>
            <Spacer />
            <Button colorScheme='green' variant="ghost" onClick={() => {
                setEdit(true);
            }}>✏️</Button>
            <Button colorScheme='green' variant="ghost" onClick={() => deleteTask(task, taskList, setTaskList)}>🗑️</Button>
            {/* <p>{task.description}</p> */}
        </Box>
    );
};
