import Task from '../components/Task'
import { useState, useCallback, useMemo } from 'react'

export default function TaskView(){

    const [tasks,setTasks] = useState([
        {id:1, text:'Ir de compras', state:true, priority:1},
        {id:2, text:'Vender arroz', state:false, priority:0},
        {id:3, text:'Llamar al médico', state:false, priority:2},
        {id:4, text:'Pagar facturas', state:true, priority:1},
        {id:5, text:'Limpiar la casa', state:false, priority:0},
        {id:6, text:'Enviar correos pendientes', state:true, priority:2},
        {id:7, text:'Preparar presentación', state:false, priority:2},
        {id:8, text:'Hacer ejercicio', state:true, priority:1},
        {id:9, text:'Leer un libro', state:false, priority:0},
        {id:10, text:'Cocinar la cena', state:true, priority:1},
        {id:11, text:'Revisar el automóvil', state:false, priority:2},
        {id:12, text:'Planear vacaciones', state:false, priority:0},
        {id:13, text:'Regar las plantas', state:true, priority:0},
        {id:14, text:'Estudiar inglés', state:false, priority:2},
        {id:15, text:'Lavar la ropa', state:true, priority:1},
        {id:16, text:'Organizar archivos', state:false, priority:0},
        {id:17, text:'Visitar a la familia', state:true, priority:1},
        {id:18, text:'Actualizar el currículum', state:false, priority:2},
        {id:19, text:'Llevar al perro al veterinario', state:true, priority:1},
        {id:20, text:'Pintar la sala', state:false, priority:0}
        ])

    const onUpdate = useCallback((input, id, type) => {
        if (type === 'delete') {
            setTasks(prev => prev.filter(task => task.id !== id));
            return;
        }
        setTasks(prev => 
            prev.map(task => {
                if (task.id !== id) return task;
                if (type === 'dropdown') return { ...task, priority: parseInt(input) };
                if (type === 'checkbox') return { ...task, state: !task.state };
                return task;
            })
        );
    }, []);

    const pendingTasks = useMemo(
        () => tasks.filter(task => !task.state).sort((a, b) => b.priority - a.priority),
        [tasks]
    );

    const completedTasks = useMemo(
        () => tasks.filter(task => task.state),
        [tasks]
    );

    return(
        <>  
            <title>Task - My Store</title>
            <meta name="description" content={`Details about Task`} />
            <h1>Task</h1>
            <small>Activity 5.3</small>
            <section className='flex flex-col gap-2'>
                {pendingTasks.map((task)=><Task key={task.id} taskData={task} stateFunctions={onUpdate}/>)}
                <hr />
                {completedTasks.map((task)=><Task key={task.id} taskData={task} stateFunctions={onUpdate}/>)}
            </section> 
        </>
    )
}