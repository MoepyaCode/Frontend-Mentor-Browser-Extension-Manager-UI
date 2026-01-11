import React from 'react'

function Section(props: Partial<BaseProps>) {
    const { className, children } = props

    return (
        <section className={` ${className}`}>
            {children}
        </section>
    )
}

export default Section
