import { RouterProvider } from 'react-router-dom'
import router from './routers/router/router'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
