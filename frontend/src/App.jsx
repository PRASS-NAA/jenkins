
import { Routes,Route } from 'react-router-dom'
import Customer from './Customer'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Customer></Customer>}/>
      </Routes>
    </>
  )
}

export default App
