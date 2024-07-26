const styles = {
    button: `button inline-block text-center rounded-full transition-all border-2 border-green-600 font-normal whitespace-nowrap`,
    primary: `button--primary bg-green-600 text-white hover:bg-white hover:text-green-600`,
    secondary: `button--secondary text-green-600 hover:bg-green-600 hover:text-white`,
    disabled: `button--disabled text-gray-400 border-gray-300 bg-gray-50 cursor-not-allowed hover:text-gray-400 hover:border-gray-300 hover:bg-gray-50`,
    full: `button--full-width w-full`,
    size: {
        sm: `py-1 px-4 `,
        md: `py-2 lg:py-3 px-8 lg:px-10`,
        lg: `py-3 px-10 lg:py-4 lg:px-12`,
    },
}
export default styles
