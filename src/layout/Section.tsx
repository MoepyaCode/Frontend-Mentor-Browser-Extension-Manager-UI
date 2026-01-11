import React from 'react'

function Section(props: Partial<BaseProps>) {
    const { className, children } = props

    return (
        <section className={`flex flex-col gap-8 ${className}`}>
            {children}
        </section>
    )
}

export default Section
