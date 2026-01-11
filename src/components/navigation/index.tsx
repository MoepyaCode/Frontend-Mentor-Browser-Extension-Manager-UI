
function NavBar() {

    return (
        <nav className='bg-[#FBFDFE] px-3 py-2 rounded-[10px] flex items-center justify-between'>
            <img src="/assets/images/logo.svg" alt="" />

            <button className="w-12.5 aspect-square rounded-xl bg-[#EEEEEE] grid place-items-center">
                <img src="/assets/images/icon-moon.svg" alt="" />
            </button>
        </nav>
    )
}

export default NavBar
