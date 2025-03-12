import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Pages/AdminDashboard'
import AddCarPage from './Pages/AddCarPage'
import ProtectedRoute from './utils/ProtectedRoute'
import CarDetailsPage from './Pages/CarDetailsPage'
import Home from './Pages/Home'
import EditCarPage from './Pages/EditCarPage'


// import Home from './Pages/Home'
function App() {

  return (
    
   <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/car/:id" element={<CarDetailsPage />} />
      <Route path='/admin' element={<AdminLogin />}/>
      <Route path='/admin-dashboard' element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }/>

<Route path='/edit-car/:id' element={
        <ProtectedRoute>
          <EditCarPage />
        </ProtectedRoute>
      }/>

      <Route path="/add-car" element={
        <ProtectedRoute>
          <AddCarPage />
        </ProtectedRoute>
      } />

    </Routes>
   </Router>
    
  )
}

export default App
