import { User } from "@supabase/supabase-js";
import { createContext } from "react";

export const SessionContext = createContext<null | User>(null)