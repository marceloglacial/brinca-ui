import Footer from '@components/Footer/Footer'
import Nav from '@components/Nav/Nav'
import NavItem from '@components/Nav/NavItem'
import NavBar from '@components/NavBar/NavBar'
import NavBarBrand from '@components/NavBar/NavBarBrand'
import NavBarContent from '@components/NavBar/NavBarContent'
import NavBarSocial from '@components/NavBar/NavBarSocial'
import { FC } from 'react'
import { MenuItems } from './Layout'
import styles from './LayoutStyles'

export interface LayoutFooterProps {
    menu?: MenuItems[]
}

const LayoutFooter: FC<LayoutFooterProps> = ({ menu }) => {
    return (
        <Footer className={styles.footer}>
            <NavBar variant='footer'>
                <NavBarBrand>
                    <a href='#'>
                        <img
                            src='https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo-white.png&w=384&q=75'
                            width={150}
                        />
                    </a>
                </NavBarBrand>
                <NavBarSocial>Social</NavBarSocial>
                <NavBarContent>
                    {menu?.map((item, index) => (
                        <Nav>
                            <NavItem key={index} accent>
                                <a href={item.href}>{item.text}</a>
                            </NavItem>
                        </Nav>
                    ))}
                </NavBarContent>
            </NavBar>
        </Footer>
    )
}
export default LayoutFooter
