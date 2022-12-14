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
export const BusinessCard = (props: CardProps) => (
    <Card square {...props}>
        <Card.Body>
            <div className='md:flex md:gap-8'>
                <div className='max-w-xs'>
                    <img src='https://www.brinca.ca/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdw2wjwhuv%2Fimage%2Fupload%2Fv1652878239%2Fbrinca%2Fpartners%2F02_uwq85e.png&w=3840&q=75' />
                </div>
                <div className='space-y-4'>
                    <h4>CardTitle</h4>
                    <p>
                        Officia exercitation labore proident nisi qui nisi sint
                        fugiat in. Sit culpa in eiusmod velit proident veniam
                        elit aute aute velit aute officia commodo irure.
                        Reprehenderit do do sunt qui magna sit.
                    </p>
                    <div>
                        <p>2255 Carling Ave, Suite 203, Ottawa (613)903-4447</p>
                        <p>http://www.horizonsdentalcare.ca</p>
                    </div>
                    <div className='flex gap-2'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 16 16'
                            height='32px'
                            width='32px'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-green-600'
                        >
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 16 16'
                            height='32px'
                            width='32px'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-green-600'
                        >
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 16 16'
                            height='32px'
                            width='32px'
                            xmlns='http://www.w3.org/2000/svg'
                            className='text-green-600'
                        >
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
)
