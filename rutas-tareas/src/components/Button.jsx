export default function Button({ active, children, type='button',onClick}){
    return(
        <button 
            type={type} 
            className={`text-sm p-2 rounded-md text-white font-semibold cursor-pointer w-full hover:bg-red-900 ${active?'bg-red-900':'bg-red-500'}`} 
            onClick={onClick}
            >
            {children}
        </button>
    )
}