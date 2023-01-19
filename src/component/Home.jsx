import { useAuth } from "../context/authContext"
import {useHistory} from 'react-router-dom'

export const Home = () => {

 const {user,logout,loading} = useAuth () 
 const history = useHistory();

 const handleLogout = async () => {
  await logout()

 }

if (loading) {
  return <h1>loading</h1>
}
if (!user) {
  history.push('/login')
}


  return (
    <div> 
      <h1>
        welcome  home {user.email}

        <button onClick={handleLogout}>
          Logout
        </button>

      </h1>
    </div>
  )
}

