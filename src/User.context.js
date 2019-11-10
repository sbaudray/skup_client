import React from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

export const useUserState = () => React.useContext(UserStateContext);
export const useUserDispatch = () => React.useContext(UserDispatchContext);

const initialUser = {
  loggedIn: false,
  name: null
};

function reducer(_state, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        loggedIn: true,
        name: action.name
      };
    case "LOGGED_OUT":
      return {
        ...initialUser,
        loggedIn: false
      };
  }
}

export function UserProvider({ children }) {
  const [user, dispatch] = React.useReducer(reducer, initialUser);

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}
