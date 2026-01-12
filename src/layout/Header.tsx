
function Header(props: { title: string }) {
    return (
        <h1 className="text-center text-[#091540] dark:text-[#FBFDFE] font-bold text-[34px] leading-[100%] tracking-[-1px]">
            {props.title}
        </h1>
    )
}

export default Header
