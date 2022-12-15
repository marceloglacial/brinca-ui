const styles = {
    container: `navbar flex gap-8`,
    brand: `navbar__brand flex items-center mr-auto`,
    items: `navbar__items 
            fixed
            lg:static 
            z-40
            overflow-scroll
            scroll-smooth 
            top-0 
            py-16
            px-8 
            lg:p-0
            bg-white 
            w-screen 
            md:w-1/2
            md:shadow-2xl
            lg:shadow-none
            lg:w-auto
            h-screen 
            lg:h-auto
            flex 
            flex-col 
            lg:flex-row 
            gap-8 
            items-center
            transition-all
            ease-in-out
            `,
    isOpen: `left-0 md:left-1/2`,
    isClose: `left-full`,
    buttonContainer: `absolute z-50 top-8 right-8 flex lg:hidden`,
    closeButton: `bg-green-600 text-white py-2 px-4 rounded-full`,
    openButton: `p-2`,
}

export default styles
