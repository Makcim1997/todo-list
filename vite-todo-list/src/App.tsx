import { FC, useState } from 'react';
import Header from './components/Header/Header';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import ModalWindowAddTask from './components/ModalWindowAddTask/ModalWindowAddTask';
import './App.css';





const App: FC = () => {

  const [modalWindowPosition, setModalWindowPosition] = useState<boolean>(false);

  const getModalWindowPosition = (): void | undefined => {
    setModalWindowPosition(!modalWindowPosition)
  };

  
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
        <TaskListContainer />
        <AddTaskButton getModalWindowPosition={getModalWindowPosition} />
      </div>
      <ModalWindowAddTask modalWindowPosition={modalWindowPosition} getModalWindowPosition={getModalWindowPosition} />
    </div>
  )
}

export default App;
