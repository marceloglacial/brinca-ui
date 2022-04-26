export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `heading flex justify-center text-4xl font-bold relative mb-8
                after:w-[100px] after:absolute after:bottom-[-16px] after:block after:bg-black after:h-[2px] after:rounded-full`,
}
export default styles
