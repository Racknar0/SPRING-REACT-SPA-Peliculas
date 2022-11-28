import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './provider/appContext';
import Login from './pages/Login/Login.jsx';
import PublicRoutes from './routes/PublicRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Dashboard from './pages/Dashboard/Dashboard';
import CardDetails from './pages/CardDetails/CardDetails';
import Loader from './components/Loader/Loader';

function App() {
    return (
        <>
            <AppProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoutes>
                                    <Dashboard />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/details/:id"
                            element={
                                <ProtectedRoutes>
                                    <Loader timer={1000}>
                                        <CardDetails />
                                    </Loader>
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <PublicRoutes>
                                    <Login />
                                </PublicRoutes>
                            }
                        />
                        {/* <Route path="/" element={<Login />} /> */}

                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </>
    );
}

export default App;
