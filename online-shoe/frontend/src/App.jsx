import { RouterProvider } from 'react-router-dom'
import router from './routers/router/router'
import AuthProvider from './context/AuthProvider'
import 'rsuite/dist/rsuite.min.css'

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
