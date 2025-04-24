import './Button.css'

export default function Button({text}){

    return (
        <div className="py-2 px-3 bg-red-500 rounded-sm relative button z-10 cursor-pointer">
            <span className="text-white select-none text-base laptop:text-xl">
                {text}
            </span>
        </div>
    )
}