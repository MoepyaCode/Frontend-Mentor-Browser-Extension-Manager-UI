import { useAppDispatch } from '@/src/store/hooks'
import { removeExtension, toggleExtension } from '@/src/store/reducer'
import { ExtensionI } from '@/src/types/extension'

function Extension(props: ExtensionI) {
    const { name, description, logo, isActive } = props
    const dispatch = useAppDispatch()

    const onClickToggle = () => dispatch(toggleExtension({ name }))

    const onClickRemove = () => dispatch(removeExtension({ name }))

    return (
        <div className='bg-[#FBFDFE] dark:bg-[#202535] p-5 rounded-[20px] shadow-[0_0_5px_rgba(0,0,0,.1)] max-w-86.5 min-h-50 flex flex-col justify-between'>
            <div className='flex gap-4'>
                <img className='w-15 aspect-square self-start' src={logo} alt="" />

                <div className='flex flex-col gap-2'>
                    <h2 className='text-[#091540] dark:text-[#FBFDFE] font-bold text-[20px] leading-[120%] tracking-[-.2px]'>{name}</h2>

                    <p className='text-[#535868] dark:text-[#C6C6C6] text-[16px] leading-[140%] tracking-[-.5px]'>{description}</p>
                </div>
            </div>

            <div className='flex items-center justify-between '>
                <button onClick={onClickRemove} className='px-4 py-2 text-[#091540] dark:text-[#FBFDFE] border-2 border-solid border-[#535868] rounded-full cursor-pointer'>
                    Remove
                </button>

                <button
                    onClick={onClickToggle}
                    className={`relative w-9 h-5 ${isActive ? 'bg-[#C7231A]' : 'bg-[#C6C6C6]'} transition-colors duration-300 rounded-full p-0.5 cursor-pointer grid place-items-center`}>
                    <div className={` w-4 aspect-square rounded-full bg-[#FBFDFE] absolute ${isActive ? 'translate-x-2' : 'translate-x-[-8px]'} transition-all duration-300`} />
                </button>
            </div>
        </div>
    )
}

export default Extension