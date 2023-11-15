
import { AuthContextProvider } from './context/AuthContext'
import "bootstrap/dist/css/bootstrap.min.css"
import RouteApp from './routes/RouteApp'


function App() {

  return (
   <AuthContextProvider>
      <RouteApp/>
   </AuthContextProvider>
  )
}

export default App
