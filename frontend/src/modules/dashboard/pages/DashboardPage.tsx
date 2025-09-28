import { TableUsers } from "../components/TableUsers"
import { UsersProvider } from "../context/UsersProvider"

export const DashboardPage = () => {
  return (
    <div className="max-w-full mx-auto overflow-x-auto">
      <UsersProvider>
        <TableUsers />
      </UsersProvider>
    </div>
  )
}