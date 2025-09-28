import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarBrand } from 'flowbite-react'

export const NavbarApp = () => {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="#">
                <span className="self-center text-xl font-semibold">Mi Dashboard</span>
            </NavbarBrand>

            <div className="flex md:order-2 items-center gap-2">
                <Dropdown inline arrowIcon={false} label={<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                    <DropdownHeader>
                        <span className="block text-sm">Juan Pérez</span>
                        <span className="block truncate text-sm font-medium">juan@example.com</span>
                    </DropdownHeader>
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>

            </div>
        </Navbar>
    )
}
