import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import DashboardCard from './components/DashboardCard'
import StudentStatus from './components/StudentStatus'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Attendance from './pages/Attendance'
import Students from './pages/Students'
import Reports from './pages/Reports'
import FirstComp from './pages/FirstComp'
import SecondComp from './pages/SecondComp'
import UserContext from "./UserContext";
function App() {
  const username = "Global info"
  return (
    <UserContext.Provider value={userName}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/students' element={<Students />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/reports' element={<Reports />} />

      </Routes>
    </UserContext.Provider>
    // <FirstComp/>

  )
}

export default App