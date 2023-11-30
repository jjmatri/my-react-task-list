import { useContext, useReducer, useState } from "react";
import { taskListContext } from "../pages/TareasPage";
import { v4 as uuid } from 'uuid';
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

export function Header() {
    const { taskList, setTaskList, createTask } = useContext(taskListContext);

    const [titleError, setTittleError] = useState(undefined);

    const reducer = (state, action) => {
        switch (action.type) {
            case "title":
                return {
                    ...state,
                    taskTitle: action.payload
                }
            case "description":
                return {
                    ...state,
                    taskDescription: action.payload
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, { taskTitle: "", taskDescription: "" })

    const handleTaskTitle = (e) => {
        const titleValue = e.target.value.length;
        setTittleError(titleValue == 0 ? undefined : titleValue < 4 ? "El título debe ser mayor a 3 caracteres." : "");
    }

    const isValidTask = titleError == "" ? true : false;

    return (
        <>
            <Box margin="5" padding="5" border="1px" borderRadius="3xl" borderColor="green.50">
                <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} onSubmit={(e) => {
                    e.preventDefault();
                    createTask({
                        id: uuid(),
                        task: state.taskTitle,
                        description: state.taskDescription,
                        done: false,
                    }, taskList, setTaskList);
                    dispatch({ type: "title", payload: "" });
                    dispatch({ type: "description", payload: "" });
                }}>
                    <Input placeholder="Title" variant="filled" colorScheme="green" type="text" onInput={
                        (e) => {
                            dispatch({ type: "title", payload: e.target.value });
                            handleTaskTitle(e);
                        }
                    } value={state.taskTitle} />
                    {titleError && <Text color="red" marginLeft="3">{titleError}</Text>}
                    <br />
                    <Input placeholder="Description" type="text" onInput={(e) => dispatch({ type: "description", payload: e.target.value })} value={state.taskDescription} />
                    <Button type="submit" isDisabled={!isValidTask} marginTop="3" marginBottom="0" color="green.400" bgColor="green.50">➕</Button>
                </form>
            </Box>
            {/* <div className="newTask">
                <h3>Nueva tarea:</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createTask({
                        id: uuid(),
                        task: state.taskTitle,
                        description: state.taskDescription,
                        done: false,
                    }, taskList, setTaskList);
                    dispatch({type: "title", payload: ""});
                    dispatch({type: "description", payload: ""});
                }}>
                    <input placeholder="Título" type="text" onInput={
                        (e) => {
                            dispatch({ type: "title", payload: e.target.value });
                            handleTaskTitle(e);
                        }

                        } value={state.taskTitle} />
                        {titleError && <p style={{color: "red"}}>{titleError}</p>}
                    <br />
                    <input placeholder="Descripción" type="text" onInput={(e) => dispatch({ type: "description", payload: e.target.value })} value={state.taskDescription} />
                    <button type="submit" disabled={!isValidTask}>➕</button>
                </form>
            </div> */}
        </>
    );
};