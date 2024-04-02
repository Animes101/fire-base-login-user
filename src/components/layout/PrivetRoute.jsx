import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { Navigate } from "react-router-dom"

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
    }

    if(user){
        return children
    }
  return (
    <Navigate to='/login'></Navigate>
  )
}

export default PrivetRoute