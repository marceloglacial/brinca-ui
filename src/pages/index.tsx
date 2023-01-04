import React from 'react'
import { Link, NavBar } from '../components'

export const PageHeader = () => (
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
            <Link>
                <a href='#'>Item 1</a>
            </Link>
            <Link>
                <a href='#'>Item 2</a>
            </Link>
            <Link>
                <a href='#'>Item 3</a>
            </Link>
            <Link>
                <a href='#'>Item 4</a>
            </Link>
            <Link>
                <a href='#'>Item 5</a>
            </Link>
            <Link>
                <a href='#'>Item 6</a>
            </Link>
            <Link variant='primary'>
                <a href='#'>Item 7</a>
            </Link>
        </NavBar.Items>
    </NavBar>
)

export const PageFooter = () => (
    <NavBar variant='bottom'>
        <NavBar.Brand>
            <a href='#'>
                <img
                    src='https://res.cloudinary.com/brinca/image/upload/v1664060777/brinca-ui/image_yfpt9t.png'
                    alt=''
                    className='w-[150px] h-[60px] object-contain'
                />
            </a>
        </NavBar.Brand>
        <NavBar.Items variant='bottom'>
            <Link variant='white'>
                <a href='#'>Item</a>
            </Link>
            <Link variant='white'>
                <a href='#'>Item</a>
            </Link>
            <Link variant='white'>
                <a href='#'>Item</a>
            </Link>
            <Link variant='white'>
                <a href='#'>Item</a>
            </Link>
            <Link variant='white'>
                <a href='#'>Item</a>
            </Link>
        </NavBar.Items>
    </NavBar>
)
