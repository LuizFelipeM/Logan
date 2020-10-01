import React, { createContext, ReactNode, useState } from 'react';
import { IUser } from '../../interfaces/IUser';

interface UserContextProps {
    children: ReactNode
}

interface Context {
    currentUser: Partial<IUser> | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<Partial<IUser> | undefined>>
}

const UserContext = createContext<Context>({ currentUser: undefined, setCurrentUser: () => {} })
const Provider = UserContext.Provider

const UserProvider: React.FC<UserContextProps> = (props) => {
    const [currentUser, setCurrentUser] = useState<Partial<IUser> | undefined>(undefined)

    return (
        <Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </Provider>
    );
}

export { UserProvider };