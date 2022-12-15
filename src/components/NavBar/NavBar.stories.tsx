import React from 'react'
import NavBar from './NavBar'
import Link from '../Link/Link'

export default {
    title: 'Components/NavBar',
    component: NavBar,
}

export const Top = (props) => {
    return (
        <NavBar {...props}>
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
    )
}
