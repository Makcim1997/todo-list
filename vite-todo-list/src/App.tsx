import { FC, useState } from 'react';
import Header from './components/Header/Header';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import ModalWindow from './components/ModalWindow/ModalWindow';
import FormAddTask from './components/FormAddTask/FormAddTask';
import { TypeTask } from './components/models/types';
import './App.css';


const App: FC = () => {

  const [modalWindowPosition, setModalWindowPosition] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<TypeTask[]>([]);

  const toggleModalWindowPosition = (): void => {
    setModalWindowPosition(!modalWindowPosition);
  };

  const addTask = (task: TypeTask): void => {
    setTaskList([
      ...taskList,
      task,
    ])
  }

  const deleteTask = (id: string): void => {
    const newTaskList = taskList.filter((task) => id !== task.id);
    setTaskList(newTaskList);
  }

  const updateTask = (taskEdit: TypeTask) => {
    const taskListEdit = taskList.map((task) => task.id === taskEdit.id ? taskEdit : task);
    setTaskList(taskListEdit);
  }

  const setTasksIsDone = (id: string, isDoneTask: boolean): void => {
    const newListTasks = taskList.map((task) => {
      if (id === task.id) {
        task.done = !isDoneTask;
      }
      return task;
    })

    setTaskList(newListTasks);
  }
  
  console.log(taskList);
  
  
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
        <TaskListContainer taskList={taskList} deleteTask={deleteTask} setTasksIsDone={setTasksIsDone} updateTask={updateTask}/>
        <AddTaskButton toggleModalWindowPosition={toggleModalWindowPosition} />
      </div>
      <ModalWindow
        modalWindowPosition={modalWindowPosition}
        toggleModalWindowPosition={toggleModalWindowPosition}>
        <FormAddTask toggleModalWindowPosition={toggleModalWindowPosition} addTask={addTask}/>
      </ModalWindow>
    </div>
  )
}

export default App;
