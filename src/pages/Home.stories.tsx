import React from 'react'
import { Card, Hero, Layout, Link, Section, Heading } from '../components'
import { PageFooter, PageHeader } from './index'

export default {
    title: 'Pages/Home',
    component: Layout,
}

export const Home = (props) => (
    <Layout header={<PageHeader />} footer={<PageFooter />} {...props}>
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
    </Layout>
)
