
function Screen(props: Partial<BaseProps>) {
    const { children, className } = props

    return (
        <main className={`min-w-screen min-h-screen px-4 py-5 sm:px-8.5 sm:py-6 xl:px-33.75 xl:py-10 bg-linear-to-b from-[#EBF2FC] to-[#EEFBF9] dark:from-[#04091B] dark:to-[#091540] ${className}`}>
            {children}
        </main>
    )
}

export default Screen
