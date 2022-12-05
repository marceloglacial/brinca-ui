import React from 'react'
import Layout from './Layout'
import Hero from '../Hero/Hero'
import Button from '../Button/Button'
import Card from '../Card/Card'

export default {
    title: 'Components/Layout',
    component: Layout,
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
    children: (
        <div className='flex flex-col gap-24'>
            <Hero
                title={'Reprehenderit quis consequat'}
                description='Proident proident nostrud velit culpa proident eiusmod pariatur. Aliqua adipisicing culpa fugiat voluptate eiusmod non laboris esse non veniam. Id eu duis sint ad ullamco proident nostrud ad excepteur sint minim eu proident.'
                image={
                    <img
                        src={`https://images.unsplash.com/photo-1600887876365-f7dcf0e5e985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ydGFsZXphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60`}
                        alt={`Hero Image`}
                        className='w-full h-full object-cover'
                    />
                }
                footer={<Button variant='secondary'>Learn More</Button>}
                reversed
            />
            <Hero
                title={'Irure quis consequat sunt ullamco'}
                description='Proident proident nostrud velit culpa proident eiusmod pariatur. Aliqua adipisicing culpa fugiat voluptate eiusmod non laboris esse non veniam. Id eu duis sint ad ullamco proident nostrud ad excepteur sint minim eu proident.'
                image={
                    <img
                        src={`https://images.unsplash.com/photo-1518896286368-849011d27f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                        alt={`Hero Image`}
                        className='w-full h-full object-cover'
                    />
                }
                footer={<Button variant='secondary'>Learn More</Button>}
            />
            <div className='grid gap-8 grid-cols-3'>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover object-top'
                            />
                        }
                    />
                </a>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1543957568-897d11ea3926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover'
                            />
                        }
                    />
                </a>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1634484850417-b8f44ae25cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvcnRhbGV6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover'
                            />
                        }
                    />
                </a>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1552035264-b9ad6e681ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover'
                            />
                        }
                    />
                </a>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1566925068640-79b2cdba4491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJyYXppbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover'
                            />
                        }
                    />
                </a>
                <a href='#'>
                    <Card
                        title='Officia duis id veniam minim '
                        description='Sint Lorem ipsum minim dolor elit excepteur est enim ad voluptate minim labore ipsum pariatur. Ex irure veniam aliqua eu id '
                        image={
                            <img
                                src={`https://images.unsplash.com/photo-1550574364-d19c7a455f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
                                alt={`Card Image`}
                                className='w-full h-full object-cover'
                            />
                        }
                    />
                </a>
            </div>
        </div>
    ),
}
