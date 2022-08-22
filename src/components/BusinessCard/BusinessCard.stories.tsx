import Image from '@components/Image/Image'
import { Meta } from '@storybook/react'
import BusinessCard from './BusinessCard'
import BusinessCarContent from './BusinessCardContent'
import BusinessCarFooter from './BusinessCardFooter'
import BusinessCardHeader from './BusinessCardHeader'
import BusinessCarImage from './BusinessCardImage'
import BusinessCardInfo from './BusinessCardInfo'

const meta: Meta = {
    title: 'Components/BusinessCard',
    component: BusinessCard,
}

export default meta

export const Default = (args: any) => {
    return (
        <div className='max-w-screen-md'>
            <BusinessCard>
                <BusinessCardHeader>
                    <BusinessCarImage>
                        <Image
                            src={
                                'https://www.brinca.ca/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75'
                            }
                        />
                    </BusinessCarImage>
                    <BusinessCardInfo>
                        <h3>Header</h3>
                        <p>
                            Do ut in labore non mollit ipsum. Velit quis dolor
                            nulla est nulla. Fugiat et dolor tempor elit
                            voluptate esse tempor. Cillum do et ullamco nostrud
                            ea reprehenderit labore irure qui culpa pariatur.
                        </p>
                    </BusinessCardInfo>
                </BusinessCardHeader>
                <BusinessCarContent>
                    1234, Street Name, Country Name <br />
                    <a href='http://brinca.ca'>http://brinca.ca/</a>
                </BusinessCarContent>
                <BusinessCarFooter>Footer</BusinessCarFooter>
            </BusinessCard>
        </div>
    )
}
