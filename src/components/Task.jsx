import DropDown from "./DropDown";
import CheckBox from "./CheckBox";
import Button from "./Button";
import React from 'react'
const Task = React.memo(({taskData,stateFunctions})=>{
    const options= [{id:1,value:0,text:"baja"},{id:2,value:1,text:"media"},{id:3,value:2,text:"alta"}]

    let style = '';

    if(taskData.state){
        style = 'border-green-600 bg-green-200'
    }
    else{
        switch(taskData.priority){
            case 0:
                style = 'border-blue-600 bg-blue-200';
            break;
            case 1:
                style = 'border-yellow-600 bg-yellow-200';
            break;
            case 2:
                style = 'border-red-600 bg-red-200';
            break;
            default:
                style = 'border-blue-600 bg-blue-200';
            break;
        }
    }

    return(
        <div className={`flex justify-between items-center rounded-md border p-2 ${style}`}>
            <div className="flex gap-2">
            <CheckBox onSelect={stateFunctions} defValue={taskData.state} id={taskData.id}/>
            <p>{taskData.text}</p>
            </div>
            <div className="flex items-center">
                <div className="max-w-100"><Button onClick={()=>{stateFunctions(null,taskData.id,'delete')}}>Delete</Button></div>    
                <DropDown options={options} defValue={options[taskData.priority].value} onSelect={stateFunctions} id={taskData.id}/>
            </div>
        </div>
    )
})

export default Task;