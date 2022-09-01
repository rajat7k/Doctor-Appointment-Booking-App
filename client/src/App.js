import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import ApplyDoctor from './pages/ApplyDoctor';
import Notifications from './pages/Notifications';
import UserList from './pages/Admin/UserList';
import DoctorList from './pages/Admin/DoctorList';
import Profile from './pages/Doctor/Profile';
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <Router>
      {
        loading && (
          <div className="spinner-parent">
            <div className="spinner-border" role="status">

            </div>
          </div>
        )
      }
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path='/register' element={<PublicRoutes><Register /></PublicRoutes>} />
        <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
        <Route path='/apply-doctor' element={<ProtectedRoutes><ApplyDoctor/></ProtectedRoutes>} />
        <Route path='/notifications' element={<ProtectedRoutes><Notifications/></ProtectedRoutes>} />
        <Route path='/admin/userslist' element={<ProtectedRoutes><UserList/></ProtectedRoutes>} />
        <Route path='/admin/doctorslist' element={<ProtectedRoutes><DoctorList/></ProtectedRoutes>} />
        <Route path='/doctor/profile/:userId' element={<ProtectedRoutes><Profile/></ProtectedRoutes>} />
      </Routes>
    </Router>
  );
}

export default App;
