import { LucideIcon } from "lucide-react"

export type SidebarItemProps = {
    item:{
        label: string,
        href: string,
        icon: LucideIcon,
    },
    key: string
}