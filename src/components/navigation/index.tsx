import { ThemesEnum } from "@/src/enums/theme.enum"
import { useTheme } from "@/src/hooks/useTheme"

function NavBar() {
    const { theme, updateTheme } = useTheme()

    const handleThemeChange = () => {
        console.log('ive been clicked')

        if (theme === ThemesEnum.Light) {
            updateTheme(ThemesEnum.Dark)
            return
        }

        updateTheme(ThemesEnum.Light)
    }

    const updateThemeImage = () => theme === ThemesEnum.Light ? (
        '/assets/images/icon-moon.svg'
    ) : (
        '/assets/images/icon-sun.svg'
    )

    const updateLogo = () => theme === ThemesEnum.Light ? (
        "/assets/images/logo.svg"
    ) : (
        "/assets/images/logo-dark-mode.svg"
    )

    return (
        <nav className='bg-[#FBFDFE] dark:bg-[#202535] px-3 py-2 rounded-[10px] flex items-center justify-between'>
            <img src={updateLogo()} alt="" />

            <button onClick={handleThemeChange} className="w-12.5 aspect-square rounded-xl bg-[#EEEEEE] dark:bg-[#2F364B] grid place-items-center">
                <img src={updateThemeImage()} alt="" />
            </button>
        </nav>
    )
}

export default NavBar
