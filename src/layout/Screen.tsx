
function Screen(props: Partial<BaseProps>) {
    const { children, className } = props

    return (
        <main className={` ${className}`}>
            {children}
        </main>
    )
}

export default Screen
