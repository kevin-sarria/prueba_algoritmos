import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
} from "flowbite-react";
import { HiMenu } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../core/state/hooks";
import { resetUser } from "../../core/state/slices/app-slice";

interface Props {
    openNavbar: () => void
}

export const NavbarApp = ({ openNavbar }: Props) => {

  const { user } = useAppSelector( state => state.app )

  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(resetUser())
    localStorage.removeItem("token")
  }

  return (
    <Navbar fluid rounded className="w-full">
      <div className="w-full flex items-center justify-between">
        {/* Drawer Button - visible solo en móvil */}
        <div className="md:hidden p-2">
          <button
            onClick={openNavbar}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <HiMenu className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Avatar Dropdown pegado a la derecha */}
        <div className="ml-auto">
          <Dropdown
            inline
            arrowIcon={false}
            label={
              <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{ user?.name }</span>
              <span className="block truncate text-sm font-medium">
                { user?.email }
              </span>
            </DropdownHeader>
            <DropdownItem>Profile</DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logout}>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
};
