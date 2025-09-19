import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'
import PortfolioApp from './PortfolioApp.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutMeContent from './pages/AboutMeContent.jsx'
import ProjectsContent from './pages/Projects/ProjectsContent.jsx'
import HomeContent from './pages/Home/HomeContent.jsx'
import ContactMeContent from './pages/ContactMeContent.jsx'
import MyResumeContent from './pages/MyResumeContent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: PortfolioApp,
    errorElement: <NotFoundPage />,
    children: [
      {index: true, element: <Navigate to="/home" replace />},
      {path: 'aboutme', Component: AboutMeContent},
      {path: 'projects', Component: ProjectsContent},
      {path: 'home', Component: HomeContent},
      {path: 'contactme', Component: ContactMeContent},
      {path: 'myresume', Component: MyResumeContent},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
