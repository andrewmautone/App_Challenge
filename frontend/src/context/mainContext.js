import { useState, createContext } from 'react';

export const Context = createContext()

export function MainContext({ children }) {

    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [connectionTypes, setConnectionTypes] = useState();

    return (
        <Context.Provider value={{ token, setToken, user, setUser,connectionTypes,setConnectionTypes }}>

            {children}

        </Context.Provider>
    )


}

