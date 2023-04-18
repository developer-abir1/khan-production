import { RouterProvider } from 'react-router-dom'
import router from './routers/router/router'
import AuthProvider from './context/AuthProvider'

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
