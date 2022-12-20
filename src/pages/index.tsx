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
            <Link href='#' variant='white'>
                Item
            </Link>
            <Link href='#' variant='white'>
                Item
            </Link>
            <Link href='#' variant='white'>
                Item
            </Link>
            <Link href='#' variant='white'>
                Item
            </Link>
            <Link href='#' variant='white'>
                Item
            </Link>
        </NavBar.Items>
    </NavBar>
)