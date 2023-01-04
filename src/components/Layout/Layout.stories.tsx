import React from 'react'
import { Section, Layout, LayoutProps } from '..'

export default {
    title: 'Components/Layout',
    component: Layout,
}

const Template = (args: LayoutProps) => <Layout {...args} />

export const Base = Template.bind({})
Base.args = {
    header: <h1>Header</h1>,
    footer: <h6>Footer</h6>,
    children: (
        <Section>
            <p>
                Lorem qui velit quis exercitation et pariatur sunt aute proident cillum proident
                fugiat. Est consequat velit proident enim commodo. Est nostrud mollit sit aliqua
                irure magna nulla ex deserunt mollit ex officia commodo elit. Anim aliquip ad labore
                eiusmod. Nisi sit duis in tempor fugiat esse occaecat aute enim. Reprehenderit
                laborum commodo amet pariatur eu.
            </p>
            <p>
                Exercitation aliqua non anim proident. Reprehenderit enim sit non nostrud quis duis
                anim ut non labore magna commodo elit ut. Ut ullamco exercitation ullamco sint duis
                duis non nostrud. Labore elit non fugiat tempor consequat est ullamco ex labore
                fugiat sit officia anim.
            </p>
        </Section>
    ),
}
