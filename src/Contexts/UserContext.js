import React,{useState, createContext} from 'react'

export const UserContext = createContext()


export const UserProvider = (props) => {

    const [user, setUser] = useState({
      firstname: "Aremu",
      lastname: "Smog",
      email: "aremuoluwagbamila@gmail.com",
      username: "aremu_smog",
      password : "Smogtechng/17",
      isLoggedIn : false
    })

    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}