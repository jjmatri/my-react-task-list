export const taskContext = () => {
  const dataArray = JSON.parse(localStorage.getItem("taskListArray"));
  if (dataArray?.length > 0) {
    return dataArray;
  }
  return [
    {
      id: 0,
      task: "Tarea de prueba",
      description: "Aquí puede ir la descripción de tu tarea",
      done: false,
    },
  ];
};
