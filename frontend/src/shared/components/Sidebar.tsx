import { Button, Drawer, DrawerHeader, DrawerItems, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react"
import { HiChartPie, HiX } from "react-icons/hi"

interface Props {
  isOpen: boolean,
  closeNavbar: () => void
}

export const SidebarApp = ({ isOpen, closeNavbar }: Props) => {
  return (
    <>
      {/* Sidebar fijo en desktop */}
      <aside className="hidden md:block w-64">
        <Sidebar aria-label="Sidebar">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </aside>

      {/* Drawer para mobile */}
      <Drawer open={isOpen} onClose={closeNavbar} position="left">
        <DrawerHeader>
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-semibold">Menú</span>
            <Button color="gray" size="sm" onClick={closeNavbar}>
              <HiX className="h-5 w-5" />
            </Button>
          </div>
        </DrawerHeader>

        <DrawerItems>
          <Sidebar aria-label="Sidebar in drawer" className="[&>div]:bg-transparent [&>div]:p-0">
            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem href="#" icon={HiChartPie}>
                  Dashboard
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  )
}