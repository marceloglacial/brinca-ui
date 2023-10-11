import { Link } from '..'

export default {
    title: 'Components/Link',
    component: Link,
}

export const Default = (props) => (
    <Link href='#' {...props}>
        Default
    </Link>
)
export const Primary = (props) => (
    <Link href='#' variant='primary' {...props}>
        Primary
    </Link>
)
export const Secondary = (props) => (
    <Link href='#' variant='secondary' {...props}>
        Secondary
    </Link>
)
export const FullWidth = (props) => (
    <Link href='#' variant='secondary' full {...props}>
        Full
    </Link>
)
export const White = (props) => (
    <div className='bg-green-600 p-8'>
        <Link href='#' variant='white' {...props}>
            White
        </Link>
    </div>
)
