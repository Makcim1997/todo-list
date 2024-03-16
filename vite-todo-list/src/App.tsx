import { FC } from 'react';
import Header from './components/Header/Header';
import AddTaskButton from './components/AddTaskButton/AddTaskButton';
import './App.css';


const App: FC = () => {
  
  return (
    <div className='App'>
      <div className='wrap'>
        <Header />
        <AddTaskButton />
      </div>
    </div>
  )
}

export default App
