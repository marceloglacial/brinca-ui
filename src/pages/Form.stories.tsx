import { Heading, Layout, Form, Section } from '../components'
import { PageFooter, PageHeader } from './index'

export default {
    title: 'Pages/Forms',
    component: Layout,
}

export const Forms = (props) => (
    <Layout header={<PageHeader />} footer={<PageFooter />} {...props}>
        <Section spacing='xl'>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    return alert('Sent!')
                }}
            >
                <Heading>
                    <h2>Form</h2>
                </Heading>
                <Form.Group>
                    <Form.Label htmlFor='name' full>
                        Full Name
                    </Form.Label>
                    <Form.Input id='name' full placeholder='Full Name' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email' full>
                        Email
                    </Form.Label>
                    <Form.Input id='email' type='email' full placeholder='e-mail' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='url' full>
                        Url Input
                    </Form.Label>
                    <Form.Input id='url' type='url' full placeholder='https://' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='message' full>
                        Message
                    </Form.Label>
                    <Form.Textarea id='message' full placeholder='Type your message' required />
                </Form.Group>
                <Form.Group>
                    <Form.Input type='submit' value='Send' />
                </Form.Group>
            </Form>
        </Section>
    </Layout>
)
