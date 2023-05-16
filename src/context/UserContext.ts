import React, { useContext } from "react";
import { UserInterface, defaultUserContext } from "./UserInterface";

export const UserContext =
  React.createContext<UserInterface>(defaultUserContext);
export const UserProvider = UserContext.Provider;

export const useUserContext = () => useContext(UserContext);
