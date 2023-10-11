import { Layout, Section, Heading } from '../components'
import { PageFooter, PageHeader } from '.'

export default {
    title: 'Pages/Single',
    component: Layout,
}

export const Single = (props) => (
    <Layout header={<PageHeader />} footer={<PageFooter />} {...props}>
        <article>
            <Section>
                <Heading className='mb-4'>
                    <h1>Page Title</h1>
                </Heading>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation{' '}
                    <a href='#'>dolore dolore aliquip dolore veniam laborum dolore</a>. Lorem
                    deserunt nostrud. Lorem eiusmod ipsum laborum ad dolore tempor ipsum non. Culpa
                    sunt irure quis aute esse ut. Ad nulla culpa anim anim deserunt laborum sit
                    velit dolore occaecat laboris deserunt non. Sunt Lorem amet sit do et Lorem
                    culpa minim aliqua laboris ullamco non proident sit.
                </p>
                <h1>Heading 1</h1>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <h2>Heading 2</h2>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <h3>Heading 3</h3>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <h4>Heading 4</h4>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <h5>Heading 5</h5>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <h6>Heading 6</h6>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <ul>
                    <li>Duis incididunt mollit ea reprehenderit. </li>
                    <li>
                        Est fugiat nisi id amet minim minim quis sunt nostrud ipsum consectetur ad.{' '}
                    </li>
                    <li>
                        Aliqua eu et in anim ipsum. In ea mollit excepteur in mollit laboris quis.{' '}
                    </li>
                    <li>
                        Ex excepteur id sunt nostrud pariatur excepteur quis reprehenderit fugiat
                        eiusmod eu. Ipsum aliquip adipisicing quis exercitation mollit magna minim
                        sint in magna dolor et occaecat et.
                    </li>
                </ul>
                <ol>
                    <li>Duis incididunt mollit ea reprehenderit. </li>
                    <li>
                        Est fugiat nisi id amet minim minim quis sunt nostrud ipsum consectetur ad.{' '}
                    </li>
                    <li>
                        Aliqua eu et in anim ipsum. In ea mollit excepteur in mollit laboris quis.{' '}
                    </li>
                    <li>
                        Ex excepteur id sunt nostrud pariatur excepteur quis reprehenderit fugiat
                        eiusmod eu. Ipsum aliquip adipisicing quis exercitation mollit magna minim
                        sint in magna dolor et occaecat et.
                    </li>
                </ol>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <img
                    src={`https://images.unsplash.com/photo-1550574364-d19c7a455f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80`}
                    alt={`Card Image`}
                    className='w-full h-full object-cover rounded-xl my-4 shadow-2xl'
                />
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
                <blockquote>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </blockquote>
                <p>
                    Et non amet ullamco exercitation. Anim sint excepteur exercitation dolore dolore
                    aliquip dolore veniam laborum dolore Lorem deserunt nostrud. Lorem eiusmod ipsum
                    laborum ad dolore tempor ipsum non. Culpa sunt irure quis aute esse ut. Ad nulla
                    culpa anim anim deserunt laborum sit velit dolore occaecat laboris deserunt non.
                    Sunt Lorem amet sit do et Lorem culpa minim aliqua laboris ullamco non proident
                    sit.
                </p>
            </Section>
        </article>
    </Layout>
)
