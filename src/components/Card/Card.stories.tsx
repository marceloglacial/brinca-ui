import React from 'react'
import Link from '../Link/Link'
import Card, { CardProps } from './Card'

export default {
    title: 'Components/Card',
    component: Card,
}

export const Base = (props: CardProps) => (
    <Card {...props}>
        <Card.Image>
            <img
                src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                alt={`Hero Image`}
                className='w-full h-full object-cover'
            />
        </Card.Image>
        <Card.Body>
            <h4>CardTitle</h4>
            <p>
                Officia exercitation labore proident nisi qui nisi sint fugiat
                in. Sit culpa in eiusmod velit proident veniam elit aute aute
                velit aute officia commodo irure. Reprehenderit do do sunt qui
                magna sit.
            </p>
            <Link href='#' variant='primary'>
                Link
            </Link>
        </Card.Body>
    </Card>
)

export const NoShadow = (props: CardProps) => (
    <Card noShadown {...props}>
        <Card.Image>
            <img
                src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                alt={`Hero Image`}
                className='w-full h-full object-cover'
            />
        </Card.Image>
        <Card.Body>
            <h4>CardTitle</h4>
            <p>
                Officia exercitation labore proident nisi qui nisi sint fugiat
                in. Sit culpa in eiusmod velit proident veniam elit aute aute
                velit aute officia commodo irure. Reprehenderit do do sunt qui
                magna sit.
            </p>
            <Link href='#' variant='primary'>
                Link
            </Link>
        </Card.Body>
    </Card>
)

export const Square = (props: CardProps) => (
    <Card square {...props}>
        <Card.Image>
            <img
                src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                alt={`Hero Image`}
                className='w-full h-full object-cover'
            />
        </Card.Image>
        <Card.Body>
            <h4>CardTitle</h4>
            <p>
                Officia exercitation labore proident nisi qui nisi sint fugiat
                in. Sit culpa in eiusmod velit proident veniam elit aute aute
                velit aute officia commodo irure. Reprehenderit do do sunt qui
                magna sit.
            </p>
            <Link href='#' variant='primary'>
                Link
            </Link>
        </Card.Body>
    </Card>
)

export const WithFooter = (props: CardProps) => (
    <Card {...props}>
        <Card.Image>
            <img
                src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                alt={`Hero Image`}
                className='w-full h-full object-cover'
            />
        </Card.Image>
        <Card.Body>
            <h4>CardTitle</h4>
            <p>
                Officia exercitation labore proident nisi qui nisi sint fugiat
                in. Sit culpa in eiusmod velit proident veniam elit aute aute
                velit aute officia commodo irure. Reprehenderit do do sunt qui
                magna sit.
            </p>
        </Card.Body>
        <Card.Footer className='bg-gray-100'>
            Voluptate aliqua nulla amet ad deserunt reprehenderit voluptate ea
            aute id cupidatat. Proident occaecat aliquip ipsum velit anim magna
            in. Velit quis proident sunt adipisicing minim qui laborum
            exercitation id minim culpa amet officia deserunt. Laboris Lorem non
            excepteur commodo excepteur qui officia aliqua excepteur aliqua
            nisi.
        </Card.Footer>
    </Card>
)
