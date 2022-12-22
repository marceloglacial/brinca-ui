import React from 'react'
import { Card, CardProps, Link } from '..'

export default {
    title: 'Components/Card',
    component: Card,
}

const content = {
    title: <h4>CardTitle</h4>,
    description: (
        <p>
            Officia exercitation labore proident nisi qui nisi sint fugiat in.
            Sit culpa in eiusmod velit proident veniam elit aute aute velit aute
            officia commodo irure. Reprehenderit do do sunt qui magna sit.
        </p>
    ),
    image: (
        <img
            src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
            alt={`Hero Image`}
            className='w-full h-full object-cover'
        />
    ),
    link: (
        <Link href='#' variant='primary'>
            Link
        </Link>
    ),
    footer: `Voluptate aliqua nulla amet ad deserunt reprehenderit voluptate ea
    aute id cupidatat. Proident occaecat aliquip ipsum velit anim magna
    in. Velit quis proident sunt adipisicing minim qui laborum
    exercitation id minim culpa amet officia deserunt. Laboris Lorem non
    excepteur commodo excepteur qui officia aliqua excepteur aliqua
    nisi.`,
}

export const Base = (props: CardProps) => (
    <Card {...props}>
        <Card.Body>
            {content.title}
            {content.description}
        </Card.Body>
    </Card>
)

export const WithLink = (props: CardProps) => (
    <Card {...props}>
        <Card.Body>
            {content.title}
            {content.description}
            {content.link}
        </Card.Body>
    </Card>
)
export const WithImage = (props: CardProps) => (
    <Card {...props}>
        <Card.Image>{content.image}</Card.Image>
        <Card.Body>
            {content.title}
            {content.description}
            {content.link}
        </Card.Body>
    </Card>
)

export const NoShadow = (props: CardProps) => (
    <Card noShadown {...props}>
        <Card.Image>{content.image}</Card.Image>

        <Card.Body>
            {content.title}
            {content.description}
            {content.link}
        </Card.Body>
    </Card>
)

export const Square = (props: CardProps) => (
    <Card squared {...props}>
        <Card.Image>{content.image}</Card.Image>
        <Card.Body>
            {content.title}
            {content.description}
            {content.link}
        </Card.Body>
    </Card>
)

export const WithFooter = (props: CardProps) => (
    <Card {...props}>
        <Card.Image>{content.image}</Card.Image>
        <Card.Body>
            {content.title}
            {content.description}
        </Card.Body>
        <Card.Footer className='bg-gray-100'>{content.footer}</Card.Footer>
    </Card>
)

export const BusinessCard = (props: CardProps) => {
    return (
        <Card {...props} squared>
            <Card.Body className='text-center lg:text-left'>
                <div className='flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-start'>
                    <figure className='w-[200px]'>
                        <img
                            src='https://res.cloudinary.com/brinca/image/upload/v1664060764/brinca-ui/image_qcfpyy.png'
                            alt=''
                            className='w-[160px] h-[65px] md:w-[230px] md:h-[95px] object-contain'
                        />
                    </figure>
                    <div className='w-full'>
                        <h4 className='text-[20px]'>
                            Nostrud consectetur id fugiat dolor enim
                        </h4>
                        <p className='text-[16px] leading-normal'>
                            Pariatur anim quis Lorem ipsum Lorem. Esse ut enim
                            fugiat ea nostrud incididunt enim sint qui culpa
                            proident.
                        </p>
                    </div>
                </div>
                <div className='w-full'>
                    <address>
                        <div>Ea laboris qui reprehenderit labore mollit.</div>
                        <div>
                            <a href='https://brinca.ca'>https://brinca.ca</a>
                        </div>
                        <div>
                            <a href='mailto:jim@rock.com'>jim@rock.com</a>
                        </div>
                        <div>
                            <a href='tel:+13115552368'>(311) 555-2368</a>
                        </div>
                    </address>
                </div>
                <div className='w-full flex justify-center lg:justify-start gap-4'>
                    <a href='#'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='green'
                        >
                            <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                        </svg>
                    </a>
                    <a href='#'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='green'
                        >
                            <path d='M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z' />
                        </svg>
                    </a>
                    <a href='#'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='green'
                        >
                            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                        </svg>
                    </a>
                    <a href='#'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='green'
                        >
                            <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                        </svg>
                    </a>
                </div>
            </Card.Body>
        </Card>
    )
}

export const CardGrid = (props: CardProps) => (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl'>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
        <Card {...props}>
            <Card.Image>{content.image}</Card.Image>
            <Card.Body>
                {content.title}
                {content.description}
            </Card.Body>
        </Card>
    </div>
)
