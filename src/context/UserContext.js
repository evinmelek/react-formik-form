import { createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    return <UserContext.Provider>{children}</UserContext.Provider>
}

export default UserContext;