import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import {AppProvider} from './provider/appContext'
import Login from './pages/Login/Login.jsx';
import PublicRoutes from './routes/PublicRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route element={<ProtectedRoutes />}> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
            {/* </Route> */}
            {/* <Route element={<PublicRoutes />}> */}
              <Route path="/" element={<Login />} />
            {/* </Route> */}
            
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
