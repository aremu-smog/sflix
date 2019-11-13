import React,{useState, createContext} from 'react'

export const UserContext = createContext()


export const UserProvider = (props) => {

    const [user, setUser] = useState({
      email: "",
      fullname : "",
      username: "",
      password : "",
      subscription : {
          status : "trial",
          package : ""
      }
    })

    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}