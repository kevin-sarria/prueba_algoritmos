import { Button, Drawer, DrawerHeader, DrawerItems, Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react"
import { useState } from "react"
import { HiChartPie, HiMenu, HiX } from "react-icons/hi"

export const SidebarApp = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Sidebar fijo en desktop */}
      <aside className="hidden md:block w-64">
        <Sidebar aria-label="Sidebar">
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="#" icon={HiChartPie}>
                Dashboard
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </aside>

      {/* Botón hamburguesa en mobile */}
      <div className="md:hidden p-2">
        <Button color="gray" onClick={() => setIsOpen(true)}>
          <HiMenu className="h-5 w-5" />
        </Button>
      </div>

      {/* Drawer para mobile */}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} position="left">
        <DrawerHeader>
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-semibold">Menú</span>
            <Button color="gray" size="sm" onClick={() => setIsOpen(false)}>
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