import { useEffect, useState } from "react"
import { getAllUsers } from "../services/get-users"
import type { ErrorModel } from "../../../core/types/http.interface"
import type { User } from "../types/user.interface"

export const useUsers = () => {

    const [ loading, setLoading ] = useState(false)
    const [error, setError] = useState<ErrorModel | null>(null);
    const [users, setUsers] = useState({})
    const [modalEditUserOpen, setModalEditUserOpen] = useState(false)
    const [modalDeleteUserOpen, setModalDeleteUserOpen] = useState(false)

    const loadUsers = async() => {
        setLoading(true)
        setError(null)


        const { success, error } = await getAllUsers({ limit: 10 })
        
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

    const openDeleteUserModal = () => setModalDeleteUserOpen(true)
    const closeDeleteUserModal = () => setModalDeleteUserOpen(false)
    const openEditUserModal = () => setModalDeleteUserOpen(true)
    const closeEditUserModal = () => setModalEditUserOpen(false)

    return {
        loading,
        reload: loadUsers,
        error,
        users,
        modalDeleteUserOpen,
        openDeleteUserModal,
        closeDeleteUserModal,
        modalEditUserOpen,
        openEditUserModal,
        closeEditUserModal
    }
}