import './App.css'
import { Route, Routes} from 'react-router-dom'
import WelcomeView from './views/WelcomeView'
import TaskView from './views/TaskView'
import AuthView from './views/AuthView'
import PrimaryNav from './components/PrimaryNav'
import Footer from './components/Footer'
import Registro from './components/Registro'
import Login from './components/Login'

function App() {

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <PrimaryNav />
      <div className='mx-4'>
        <Routes>
          <Route index element={<WelcomeView/>} />
          <Route path='task' element={<TaskView />}/>
          <Route path="*" element={<p>404</p>} />
          <Route path='auth' element={<AuthView />}>
            <Route path='login' element={<Login />}/>
            <Route path='registro' element={<Registro />}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
