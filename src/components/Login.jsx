import { useState } from 'react';
import Button from './Button'
export default function Login(){
    const [user, setUser]= useState('');
    const [pass, setPass] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        console.log(form.method)
        console.log(Object.fromEntries(formData.entries()))
    }

    return(
        <div className='mb-4 max-w-lg m-auto'>
            <p>Login</p>
            <form method="post" onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <label>
                    <p>User: </p>
                    <input className='border-2 border-red-800 rounded-md w-full' name='UserName' type='text' maxLength={10} required onChange={(e)=>(setUser(e.target.value))} value={user}/>
                </label>
                <label>
                    <p>Password: </p>
                    <input className='border-2 border-red-800 rounded-md w-full' name='UserPass' type='password' maxLength={10} required onChange={(e)=>(setPass(e.target.value))} value={pass}/>
                </label>
                <fieldset>
                    <Button type='submit'>Ingresar</Button>
                </fieldset>
            </form>
        </div>
    )
}