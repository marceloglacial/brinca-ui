import Button from '@components/Button/Button'
import Nav from '@components/Nav/Nav'
import NavItem from '@components/Nav/NavItem'
import NavBar from '@components/NavBar/NavBar'
import NavBarBrand from '@components/NavBar/NavBarBrand'
import NavBarContent from '@components/NavBar/NavBarContent'
import { FC } from 'react'
import { MenuItems } from './Layout'
import styles from './LayoutStyles'

export interface LayoutHeaderProps {
    menu?: MenuItems[]
}

const LayoutHeader: FC<LayoutHeaderProps> = ({ menu }) => {
    return (
        <NavBar className={styles.header}>
            <NavBarBrand>
                <a href='#'>
                    <img
                        src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75'
                        width={230}
                    />
                </a>
            </NavBarBrand>
            <NavBarContent>
                {menu && (
                    <Nav>
                        {menu.map((item, index) => (
                            <NavItem key={index}>
                                <a href={item.href}>{item.text}</a>
                            </NavItem>
                        ))}
                    </Nav>
                )}
                <Button href='#'>Button</Button>
            </NavBarContent>
        </NavBar>
    )
}
export default LayoutHeader
