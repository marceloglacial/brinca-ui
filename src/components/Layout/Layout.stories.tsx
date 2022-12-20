import React from 'react'
import Layout, { LayoutProps } from './Layout'
import Hero from '../Hero/Hero'
import Link from '../Link/Link'
import Card from '../Card/Card'
import Heading from '../Heading/Heading'
import Section from '../Section/Section'
import NavBar from '../NavBar/NavBar'

export default {
    title: 'Components/Layout',
    component: Layout,
}

const Template = (args: LayoutProps) => <Layout {...args} />

const header = (
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

const footer = (
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

export const Home = Template.bind({})
Home.args = {
    header,
    footer,
    children: (
        <Section spacing='xl'>
            <Hero reversed>
                <Hero.Image>
                    <img
                        src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                        alt={`Hero Image`}
                        className='w-full h-full object-cover'
                    />
                </Hero.Image>
                <Hero.Body>
                    <h1>Reprehenderit quis consequat</h1>
                    <p>
                        Proident proident nostrud velit culpa proident eiusmod
                        pariatur. Aliqua adipisicing culpa fugiat voluptate
                        eiusmod non laboris esse non veniam. Id eu duis sint ad
                        ullamco proident nostrud ad excepteur sint minim eu
                        proident.
                    </p>
                    <Link href='#' variant='secondary'>
                        Voluptate minim
                    </Link>
                </Hero.Body>
            </Hero>
            <Hero>
                <Hero.Image>
                    <img
                        src={`https://images.unsplash.com/photo-1518896286368-849011d27f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                        alt={`Hero Image`}
                        className='w-full h-full object-cover'
                    />
                </Hero.Image>
                <Hero.Body>
                    <h1>Reprehenderit quis consequat</h1>
                    <p>
                        Proident proident nostrud velit culpa proident eiusmod
                        pariatur. Aliqua adipisicing culpa fugiat voluptate
                        eiusmod non laboris esse non veniam. Id eu duis sint ad
                        ullamco proident nostrud ad excepteur sint minim eu
                        proident.
                    </p>
                    <Link href='#' variant='secondary'>
                        Voluptate minim
                    </Link>
                </Hero.Body>
            </Hero>
            <Section spacing='l'>
                <Heading>Excepteur est enim</Heading>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover object-top'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1543957568-897d11ea3926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1634484850417-b8f44ae25cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvcnRhbGV6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1552035264-b9ad6e681ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1566925068640-79b2cdba4491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                    <a href='#'>
                        <Card className='transition-transform hover:scale-95'>
                            <Card.Image>
                                <img
                                    src={`https://images.unsplash.com/photo-1550574364-d19c7a455f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
                                    alt={`Card Image`}
                                    className='w-full h-full object-cover'
                                />
                            </Card.Image>
                            <Card.Body>
                                <h4>Dolore sunt nostrud laboris sunt est in</h4>
                                <p>
                                    Est ea laborum laboris sunt et ut aliquip
                                    occaecat et dolor. Excepteur nostrud laboris
                                    nostrud cupidatat proident esse do ut qui
                                    irure excepteur.
                                </p>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className='text-center'>
                    <Link href='#' variant='primary'>
                        Minim Labore
                    </Link>
                </div>
            </Section>
        </Section>
    ),
}

export const Page = Template.bind({})
Page.args = {
    header,
    footer,
    children: (
        <Section>
            <Heading className='mb-4'>Page Title</Heading>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h1>Heading 1</h1>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h2>Heading 2</h2>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h3>Heading 3</h3>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h4>Heading 4</h4>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h5>Heading 5</h5>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <h6>Heading 6</h6>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <ul>
                <li>Duis incididunt mollit ea reprehenderit. </li>
                <li>
                    Est fugiat nisi id amet minim minim quis sunt nostrud ipsum
                    consectetur ad.{' '}
                </li>
                <li>
                    Aliqua eu et in anim ipsum. In ea mollit excepteur in mollit
                    laboris quis.{' '}
                </li>
                <li>
                    Ex excepteur id sunt nostrud pariatur excepteur quis
                    reprehenderit fugiat eiusmod eu. Ipsum aliquip adipisicing
                    quis exercitation mollit magna minim sint in magna dolor et
                    occaecat et.
                </li>
            </ul>
            <ol>
                <li>Duis incididunt mollit ea reprehenderit. </li>
                <li>
                    Est fugiat nisi id amet minim minim quis sunt nostrud ipsum
                    consectetur ad.{' '}
                </li>
                <li>
                    Aliqua eu et in anim ipsum. In ea mollit excepteur in mollit
                    laboris quis.{' '}
                </li>
                <li>
                    Ex excepteur id sunt nostrud pariatur excepteur quis
                    reprehenderit fugiat eiusmod eu. Ipsum aliquip adipisicing
                    quis exercitation mollit magna minim sint in magna dolor et
                    occaecat et.
                </li>
            </ol>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <img
                src={`https://images.unsplash.com/photo-1550574364-d19c7a455f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
                alt={`Card Image`}
                className='w-full h-full object-cover rounded-xl my-4 shadow-2xl'
            />
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
            <blockquote>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </blockquote>
            <p>
                Et non amet ullamco exercitation. Anim sint excepteur
                exercitation dolore dolore aliquip dolore veniam laborum dolore
                Lorem deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore
                tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                culpa anim anim deserunt laborum sit velit dolore occaecat
                laboris deserunt non. Sunt Lorem amet sit do et Lorem culpa
                minim aliqua laboris ullamco non proident sit.
            </p>
        </Section>
    ),
}
