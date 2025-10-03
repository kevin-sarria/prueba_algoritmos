import { useEffect, useState } from "react"
import { getAllUsers } from "../services/get-users"
import type { ErrorModel } from "../../../core/types/http.interface"
import { type User, type UserResponse } from "../types/user.interface"
import { useAppSelector } from "../../../core/state/hooks"

export const useUsers = () => {

    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState<ErrorModel | null>(null);
    const [users, setUsers] = useState<UserResponse>({ data: [] })
    const [userSelected, setUserSelected] = useState<User | null>(null)
    const [modalAddUserOpen, setModalAddUserOpen] = useState(false)
    const [modalEditUserOpen, setModalEditUserOpen] = useState(false)
    const [modalDeleteUserOpen, setModalDeleteUserOpen] = useState(false)

    const account = useAppSelector( state => state.app.user )

    const isMyAccount = ( user: User ) => {
        if( account?.id === user?.id ) return true
        return false
    }

    const loadUsers = async() => {
        setLoading(true)
        setError(null)


        const { success, error } = await getAllUsers()
        
        if (success) {
            setUsers(success);
        } else if (error) {
            setError(error);
        }

        setLoading(false);
    }

    useEffect( () => {
        loadUsers()
    }, [] )

    const openAddUserModal = () => setModalAddUserOpen(true)
    const closeAddUserModal = () => setModalAddUserOpen(false)
    const openEditUserModal = (user: User) => {
        setModalEditUserOpen(true)
        setUserSelected(user)
    }
    const closeEditUserModal = () => setModalEditUserOpen(false)
    const openDeleteUserModal = () => setModalDeleteUserOpen(true)
    const closeDeleteUserModal = () => setModalDeleteUserOpen(false)

    return {
        loading,
        reload: loadUsers,
        error,
        users,
        userSelected,
        modalAddUserOpen,
        openAddUserModal,
        closeAddUserModal,
        modalDeleteUserOpen,
        openDeleteUserModal,
        closeDeleteUserModal,
        modalEditUserOpen,
        openEditUserModal,
        closeEditUserModal,
        isMyAccount
    }
}