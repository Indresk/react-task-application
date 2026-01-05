export default function DropDown({options,defValue,onSelect,id}){
    return(
        <form>
            <select onChange={(e)=>onSelect(e.target.value,id,'dropdown')} defaultValue={defValue} name="dropdown">
                {options.map((option)=><option key={option.id} value={option.value}>{option.text}</option>)}
            </select>
        </form>
    )
}