export default function CheckBox({defValue,onSelect,id}){
    return(
        <form>
            <input type="checkbox" onChange={(e)=>onSelect(e.target.checked,id,'checkbox')} defaultChecked={defValue} name="checkbox"></input>
        </form>
    )
}