import type { ReactNode } from "react";
import { useUsers } from "../hooks/use-users";
import { UsersContext } from "./UsersContext";

interface UsersProviderProps {
  children: ReactNode;
}


export type UsersContextType = ReturnType<typeof useUsers>

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const usersHook = useUsers();

  return (
    <UsersContext.Provider value={usersHook}>
      {children}
    </UsersContext.Provider>
  );
};
