import { useState } from "react"
import { loginService, registerService } from "../services/auth-service"
import { setUser } from "../../../core/state/slices/app-slice"
import { jwtDecode } from "jwt-decode";
import type { TokenDecodeInformation } from "../types/auth";
import { useAppDispatch } from "../../../core/state/hooks";

export const useAuth = () => {

    const [error, setError] = useState<string | null>(null)

    const dispatch = useAppDispatch()

    const handleLogin = async(email: string, password: string) => {
        const { success, error } = await loginService({email, password})

        if( error ) {
            setError(error?.message)
            return error
        }

        const token = success?.token || ""

        const tokenDecoded = jwtDecode<TokenDecodeInformation>(token)
        localStorage.setItem("token", token)
        
        const dataFormatted = {
            id: tokenDecoded?.id,
            name: tokenDecoded?.name,
            email: tokenDecoded?.email,
            role: tokenDecoded?.role
        }

        return dispatch(setUser(dataFormatted))
    }

    const handleRegister = async( name: string, email: string, password: string ) => {
        const { success, error } = await registerService({name, email, password})

        if( error ) return setError(error?.message)

        const token = success?.token || ""

        const tokenDecoded = jwtDecode<TokenDecodeInformation>(token)
        localStorage.setItem("token", token)
        
        const dataFormatted = {
            id: tokenDecoded?.id,
            name: tokenDecoded?.name,
            email: tokenDecoded?.email,
            role: tokenDecoded?.role
        }

        return dispatch(setUser(dataFormatted))
    }

    return {
        error,
        handleLogin,
        handleRegister
    }
}