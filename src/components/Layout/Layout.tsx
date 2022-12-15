import Link from '../Link/Link'
import NavBar from '../NavBar/NavBar'
import React, { FC, ReactNode } from 'react'
import styles from './LayoutStyles'

export interface LayoutProps {
    children?: ReactNode
    className?: string
}

const Layout: FC<LayoutProps> = ({ children, className = '' }): JSX.Element => {
    return (
        <main className={`${styles.container} ${className}`}>
            <div>
                <NavBar>
                    <NavBar.Brand>
                        <a href='#'>
                            <img
                                src='https://res.cloudinary.com/brinca/image/upload/v1664060764/brinca-ui/image_qcfpyy.png'
                                alt=''
                                className='w-[160px] h-[65px] md:w-[230px] md:h-[95px] object-contain'
                            />
                        </a>
                    </NavBar.Brand>
                    <NavBar.Items>
                        <Link href='#'>Item 1</Link>
                        <Link href='#'>Item 1</Link>
                        <Link href='#'>Item 1</Link>
                        <Link href='#'>Item 1</Link>
                        <Link href='#'>Item 1</Link>
                        <Link href='#'>Item 1</Link>
                        <Link href='#' variant='primary'>
                            Item 1
                        </Link>
                    </NavBar.Items>
                </NavBar>
            </div>
            {children}
            <div>Footer</div>
        </main>
    )
}
export default Layout
