import { FC, useState } from 'react';
import Header from './components/Header/Header';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import ModalWindowAddTask from './components/ModalWindowAddTask/ModalWindow';
import FormAddTask from './components/FormAddTask/FormAddTask';
import { TypeTask } from './components/models/types';
import './App.css';


const App: FC = () => {

  const [modalWindowPosition, setModalWindowPosition] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<TypeTask[]>([]);

  const toggleModalWindowPosition = (): void => {
    setModalWindowPosition(!modalWindowPosition)
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

  const setTasksIsDone = (id: string, isDoneTask: boolean): void => {
    const newListTasks = taskList.map((task) => {
      if (id === task.id) {
        task.done = !isDoneTask;
      }
      return task;
    })

    setTaskList(newListTasks);
  }

  
  
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
        <TaskListContainer taskList={taskList} deleteTask={deleteTask} setTasksIsDone={setTasksIsDone} />
        <AddTaskButton toggleModalWindowPosition={toggleModalWindowPosition} />
      </div>
      <ModalWindowAddTask
        modalWindowPosition={modalWindowPosition}
        toggleModalWindowPosition={toggleModalWindowPosition}>
        <FormAddTask toggleModalWindowPosition={toggleModalWindowPosition} addTask={addTask}/>
      </ModalWindowAddTask>
    </div>
  )
}

export default App;
