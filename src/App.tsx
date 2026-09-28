import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import NotFound from './pages/NotFound';

const PageLoader = lazy(() => import('./components/PageLoader'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));


function App() {
  return (
    <div className="bg-background-dark min-h-screen bg-dots">
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter >
    </div>
  )
}

export default App
