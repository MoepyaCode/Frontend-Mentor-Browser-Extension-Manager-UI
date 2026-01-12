import { ExtensionFilters } from "@/src/enums/extension.enum"
import { useAppDispatch, useAppSelector } from "@/src/store/hooks"
import { toggleExtensionShow } from "@/src/store/reducer"

function FilterButtons() {
    const extensionFilters = Object.entries(ExtensionFilters)
    const { show } = useAppSelector(state => state["reducer/extensions"].extensions)
    const dispatch = useAppDispatch()

    const renderButton = (filter: [string, ExtensionFilters], index: number) => {
        const [key, value] = filter
        const isCurrentFilter = show === value

        const onClick = () => {
            if (show === value) return
            dispatch(toggleExtensionShow({ show: value }))
        }

        return (
            <button
                key={index}
                className={`px-5 py-2.5 ${isCurrentFilter ? 'bg-[#C7231A] text-[#FBFDFE] dark:text-[#091540]' : 'bg-[#FBFDFE] dark:bg-[#2F364B] text-[#091540] dark:text-[#FBFDFE]'} transition-colors duration-300 rounded-full shadow-[0px_0px_5px_rgba(0,0,0,.1)] cursor-pointer`}
                onClick={onClick}>
                {key}
            </button>
        )
    }

    return (
        <div className="flex items-center justify-center gap-3">
            {extensionFilters.map(renderButton)}
        </div>
    )
}

export default FilterButtons