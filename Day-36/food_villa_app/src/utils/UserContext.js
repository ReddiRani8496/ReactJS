import  { createContext} from 'react'

const UserContext = createContext({
    user:{
        name:'Reddirani',
        email:'rani@gmail.com',
    }
})

export default UserContext