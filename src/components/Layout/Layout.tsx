import Footer, { FooterProps } from '@components/Footer/Footer'
import Nav from '@components/Nav/Nav'
import NavItem from '@components/Nav/NavItem'
import NavBar, { NavBarProps } from '@components/NavBar/NavBar'
import { navBarItems } from '@components/NavBar/NavBar.stories'
import NavBarBrand from '@components/NavBar/NavBarBrand'
import NavBarContent from '@components/NavBar/NavBarContent'
import NavBarSocial from '@components/NavBar/NavBarSocial'
import { FC, ReactNode } from 'react'

export interface LayoutProps {
    children: ReactNode
    menu: NavBarProps
    footer: FooterProps
}
const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='layout max-w-screen-lg mx-auto'>
            <main>{children}</main>
            <Footer>
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
                        <Nav>
                            {navBarItems.map((item, index) => (
                                <NavItem key={index} accent>
                                    <a href={item.href}>{item.text}</a>
                                </NavItem>
                            ))}
                        </Nav>
                    </NavBarContent>
                </NavBar>
            </Footer>
        </div>
    )
}
export default Layout
