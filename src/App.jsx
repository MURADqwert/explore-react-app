import Users from './Users'
import Player from './payers'
import './App.css'
import { Suspense } from 'react'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  
function App() {
  
  
 
  return (
    <>
    <Suspense fallback={<p>Users Loading ...</p>}>
      <Users fetchUsers = {fetchUsers}></Users>
    </Suspense>
    <Player></Player>
    </>
  )
}

export default App
