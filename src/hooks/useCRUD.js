export const useCRUD = () => {

    const createTask = (newTask, taskList, setTaskList) =>  {
        setTaskList([...taskList, newTask]);
    }
    const deleteTask = ({id}, taskList, setTaskList) => {
        setTaskList(taskList.filter((task) => id != task.id ))
    }
    const updateTask = ({id}, title, description, taskList, setTaskList) => {
        setTaskList(taskList.map((task) => {
            if (task.id == id){
                task.task= title;
                task.description= description;
            }
            return task;
        } ))
    }
    const deleteAll = (setTaskList) => {
        setTaskList([]);
    }
    return {
        createTask,
        deleteTask,
        updateTask,
        deleteAll,
    }
}