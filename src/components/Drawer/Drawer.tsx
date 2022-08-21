import { FC } from 'react'

export interface DrawerProps {
    className?: string
    position?: 'top' | 'right' | 'bottom' | 'right'
}

const Drawer: FC<DrawerProps> = ({ className = '', position = 'right' }) => {
    return <dialog className={className}>Drawer</dialog>
}

export default Drawer
