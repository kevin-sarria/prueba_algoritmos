import { createContext } from "react";
import type { UsersContextType } from "./UsersProvider";

export const UsersContext = createContext<UsersContextType | undefined>(undefined);
