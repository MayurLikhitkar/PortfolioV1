import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
        ],
    }
]);

export default router;