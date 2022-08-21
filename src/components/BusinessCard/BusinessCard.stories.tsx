import { Meta } from '@storybook/react'
import BusinessCard from './BusinessCard'
import BusinessCarContent from './BusinessCardContent'
import BusinessCarFooter from './BusinessCardFooter'
import BusinessCardHeader from './BusinessCardHeader'

const meta: Meta = {
    title: 'Components/BusinessCard',
    component: BusinessCard,
}

export default meta

export const Default = (args: any) => {
    return (
        <div className='max-w-screen-md'>
            <BusinessCard>
                <BusinessCardHeader>Header</BusinessCardHeader>
                <BusinessCarContent>
                    Nostrud sit do officia eiusmod. Cillum aute pariatur aliqua
                    officia dolore aliquip officia est veniam et incididunt
                    laborum. Lorem magna in proident anim sit aliquip.
                </BusinessCarContent>
                <BusinessCarFooter>Footer</BusinessCarFooter>
            </BusinessCard>
        </div>
    )
}
